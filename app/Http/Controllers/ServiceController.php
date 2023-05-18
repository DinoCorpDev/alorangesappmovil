<?php

namespace App\Http\Controllers;

use App\Models\Attribute;
use App\Models\AttributeValue;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Service;
use App\Models\ServiceAttribute;
use App\Models\ServiceAttributeValue;
use App\Models\ServiceCategory;
use App\Models\ServiceTax;
use App\Models\ServiceTranslation;
use App\Models\ServiceVariation;
use App\Models\ServiceVariationCombination;
use App\Models\ShopBrand;
use App\Models\Upload;
use App\Utility\CategoryUtility;
use Auth;
use CoreComponentRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

use PhpOffice\PhpSpreadsheet\Reader\Exception;
use PhpOffice\PhpSpreadsheet\IOFactory;

class ServiceController extends Controller
{
    public function __construct()
    {
        $this->middleware(['permission:show_products'])->only('index');
        $this->middleware(['permission:add_products'])->only('create');
        $this->middleware(['permission:view_products'])->only('show');
        $this->middleware(['permission:edit_products'])->only('edit');
        $this->middleware(['permission:duplicate_products'])->only('duplicate');
        $this->middleware(['permission:delete_products'])->only('destroy');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index(Request $request)
    {
        $col_name = null;
        $query = null;
        $sort_search = null;
        $services = Service::orderBy('created_at', 'desc')->where('shop_id', auth()->user()->shop_id);

        if ($request->search != null) {
            $services = $services->where('name', 'like', '%' . $request->search . '%');
            $sort_search = $request->search;
        }
        if ($request->type != null) {
            $var = explode(",", $request->type);
            $col_name = $var[0];
            $query = $var[1];
            $services = $services->orderBy($col_name, $query);
            $sort_type = $request->type;
        }

        $services = $services->paginate(15);
        $type = 'All';

        return view('backend.service.services.index', compact('services', 'type', 'col_name', 'query', 'sort_search'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::where('level', 0)->get();
        $attributes = Attribute::get();
        return view('backend.service.services.create', compact('categories', 'attributes'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        CoreComponentRepository::instantiateShopRepository();

        if ($request->has('is_variant') && !$request->has('variations')) {
            flash(translate('Invalid service variations'))->error();
            return redirect()->back();
        }

        $service                    = new Service;
        $service->name              = $request->name;
        $service->shop_id           = auth()->user()->shop_id;
        $service->brand_id          = $request->brand_id;
        $service->unit              = $request->unit;
        $service->min_qty           = $request->min_qty;
        $service->max_qty           = $request->max_qty;
        $service->photos            = $request->photos;
        $service->thumbnail_img     = $request->thumbnail_img;
        $service->description       = $request->description;
        $service->published         = $request->status;

        // SEO meta
        $service->meta_title        = (!is_null($request->meta_title)) ? $request->meta_title : $service->name;
        $service->meta_description  = (!is_null($request->meta_description)) ? $request->meta_description : strip_tags($service->description);
        $service->meta_image        = (!is_null($request->meta_image)) ? $request->meta_image : $service->thumbnail_img;
        $service->slug              = Str::slug($request->name, '-') . '-' . strtolower(Str::random(5));

        // warranty
        $service->has_warranty      = $request->has('has_warranty') && $request->has_warranty == 'on' ? 1 : 0;

        // tag
        $tags                       = array();

        if ($request->tags != null) {
            foreach (json_decode($request->tags) as $key => $tag) {
                array_push($tags, $tag->value);
            }
        }

        $service->tags              = implode(',', $tags);

        // lowest highest price
        if ($request->has('is_variant') && $request->has('variations')) {
            $service->lowest_price  =  min(array_column($request->variations, 'price'));
            $service->highest_price =  max(array_column($request->variations, 'price'));
        } else {
            $service->lowest_price  =  $request->price;
            $service->highest_price =  $request->price;
        }

        // stock based on all variations
        $service->stock             = ($request->has('is_variant') && $request->has('variations')) ? max(array_column($request->variations, 'stock')) : $request->stock;

        // discount
        $service->discount          = $request->discount;
        $service->discount_type     = $request->discount_type;

        if ($request->date_range != null) {
            $date_var               = explode(" to ", $request->date_range);
            $service->discount_start_date = strtotime($date_var[0]);
            $service->discount_end_date   = strtotime($date_var[1]);
        }

        // shipping info
        $service->standard_delivery_time    = $request->standard_delivery_time;
        $service->express_delivery_time     = $request->express_delivery_time;
        $service->weight                    = $request->weight;
        $service->height                    = $request->height;
        $service->length                    = $request->length;
        $service->width                     = $request->width;

        $service->save();

        // Service Translations
        $service_translation = ServiceTranslation::firstOrNew(['lang' => env('DEFAULT_LANGUAGE'), 'service_id' => $service->id]);
        $service_translation->name = $request->name;
        $service_translation->unit = $request->unit;
        $service_translation->description = $request->description;
        $service_translation->save();

        // category
        $service->categories()->sync($request->category_ids);

        // shop category ids
        $shop_category_ids = [];
        foreach ($request->category_ids ?? [] as $id) {
            $shop_category_ids[] = CategoryUtility::get_grand_parent_id($id);
        }

        // this get error
        /* $shop_category_ids =  array_merge(array_filter($shop_category_ids), $service->shop->categories->pluck('category_id')->toArray());
        $service->shop->categories()->sync($shop_category_ids);*/

        // shop brand
        if ($request->brand_id) {
            ShopBrand::updateOrCreate([
                'shop_id' => $service->shop_id,
                'brand_id' => $request->brand_id,
            ]);
        }

        //taxes
        $tax_data = array();
        $tax_ids = array();

        if ($request->has('taxes')) {
            foreach ($request->taxes as $key => $tax) {
                array_push($tax_data, [
                    'tax' => $tax,
                    'tax_type' => $request->tax_types[$key]
                ]);
            }
            $tax_ids = $request->tax_ids;
        }

        $taxes = array_combine($tax_ids, $tax_data);

        $service->service_taxes()->sync($taxes);

        // service variation
        $service->is_variant        = ($request->has('is_variant') && $request->has('variations')) ? 1 : 0;

        if ($request->has('is_variant') && $request->has('variations')) {
            foreach ($request->variations as $variation) {
                $p_variation              = new ServiceVariation;
                $p_variation->service_id  = $service->id;
                $p_variation->code        = $variation['code'];
                $p_variation->price       = $variation['price'];
                $p_variation->stock       = $variation['stock'];
                $p_variation->sku         = $variation['sku'];
                $p_variation->img         = $variation['img'];
                $p_variation->save();

                foreach (array_filter(explode("/", $variation['code'])) as $combination) {
                    $p_variation_comb                         = new ServiceVariationCombination;
                    $p_variation_comb->service_id             = $service->id;
                    $p_variation_comb->service_variation_id   = $p_variation->id;
                    $p_variation_comb->attribute_id           = explode(":", $combination)[0];
                    $p_variation_comb->attribute_value_id     = explode(":", $combination)[1];
                    $p_variation_comb->save();
                }
            }
        } else {
            $variation              = new ServiceVariation;
            $variation->service_id  = $service->id;
            $variation->sku         = $request->sku;
            $variation->price       = $request->price;
            $variation->stock       = $request->stock;
            $variation->save();
        }

        // attribute
        if ($request->has('service_attributes') && $request->service_attributes[0] != null) {
            foreach ($request->service_attributes as $attr_id) {
                $attribute_values = 'attribute_' . $attr_id . '_values';
                if ($request->has($attribute_values) && $request->$attribute_values != null) {
                    $p_attribute = new ServiceAttribute;
                    $p_attribute->service_id = $service->id;
                    $p_attribute->attribute_id = $attr_id;
                    $p_attribute->save();

                    foreach ($request->$attribute_values as $val_id) {
                        $p_attr_value = new ServiceAttributeValue;
                        $p_attr_value->service_id = $service->id;
                        $p_attr_value->attribute_id = $attr_id;
                        $p_attr_value->attribute_value_id = $val_id;
                        $p_attr_value->save();
                    }
                }
            }
        }

        $service->save();

        flash(translate('Service has been inserted successfully'))->success();
        return redirect()->route('service.index');
    }

    private function saveArchive($archive)
    {
        $type = array(
            "jpg" => "image",
            "jpeg" => "image",
            "png" => "image",
            "svg" => "image",
            "webp" => "image",
            "gif" => "image",
            "mp4" => "video",
            "mpg" => "video",
            "mpeg" => "video",
            "webm" => "video",
            "ogg" => "video",
            "avi" => "video",
            "mov" => "video",
            "flv" => "video",
            "swf" => "video",
            "mkv" => "video",
            "wmv" => "video",
            "wma" => "audio",
            "aac" => "audio",
            "wav" => "audio",
            "mp3" => "audio",
            "zip" => "archive",
            "rar" => "archive",
            "7z" => "archive",
            "doc" => "document",
            "txt" => "document",
            "docx" => "document",
            "pdf" => "document",
            "csv" => "document",
            "xml" => "document",
            "ods" => "document",
            "xlr" => "document",
            "xls" => "document",
            "xlsx" => "document"
        );

        $carpeta = public_path() . "/uploads/all/";
        if ($archive !== "" && $archive !== null) {
            if (strpos($archive, 'file') !== false) {
                if (@fopen($archive, "r")) {
                    $destino = $carpeta . substr($archive, strrpos($archive, "/") + 1);
                    file_put_contents($destino, file_get_contents($archive));

                    $upload = new Upload;
                    $upload->file_original_name = substr($archive, strrpos($archive, "/") + 1);
                    $upload->file_name = "/uploads/all/" . substr($archive, strrpos($archive, "/") + 1);
                    $upload->user_id = Auth::user()->id;

                    $upload->extension = substr($archive, strrpos($archive, ".") + 1);

                    if (isset($type[$upload->extension])) {
                        $upload->type = $type[$upload->extension];
                    } else {
                        $upload->type = "others";
                    }

                    $upload->file_size = 1024;
                    $upload->save();

                    return $upload->id;
                } else {
                    return "";
                }
            } else {
                return "";
            }
        }
    }

    /**
     * Stores a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function import(Request $request)
    {
        $the_file = $request->file('uploaded_file');

        try {
            $spreadsheet = IOFactory::load($the_file->getRealPath());
            $sheet        = $spreadsheet->getActiveSheet();
            $row_limit    = $sheet->getHighestDataRow();
            $column_limit = $sheet->getHighestDataColumn();
            $row_range    = range(2, $row_limit);
            $column_range = range('O', $column_limit);
            $startcount = 2;
            $data = array();

            // referencia,categoria,subcategoria,marca,precio,descuento,divisa,stock,garantia,envio,consumo,material,medida_de_servicio,si1,medida_de_engaste

            foreach ($row_range as $row) {
                $data[] = [
                    'referencia' => $sheet->getCell('A' . $row)->getValue(),
                    'categoria' => $sheet->getCell('B' . $row)->getValue(),
                    'subcategoria' => $sheet->getCell('C' . $row)->getValue(),
                    'marca' => $sheet->getCell('D' . $row)->getValue(),
                    'precio' => preg_replace('/[^0-9]/', '', $sheet->getCell('E' . $row)->getValue()),
                    'descuento' => preg_replace('/[^0-9]/', '', $sheet->getCell('F' . $row)->getValue()),
                    'divisa' => $sheet->getCell('G' . $row)->getValue(),
                    'stock' => preg_replace('/[^0-9]/', '', $sheet->getCell('H' . $row)->getValue()),
                    'garantia' => $sheet->getCell('I' . $row)->getValue(),
                    'envio' => $sheet->getCell('J' . $row)->getValue(),
                    'consumo' => $sheet->getCell('K' . $row)->getValue(),
                    'material' => $sheet->getCell('L' . $row)->getValue(),
                    'medida_de_servicio' => $sheet->getCell('M' . $row)->getValue(),
                    'si1' => $sheet->getCell('N' . $row)->getValue(),
                    'medida_de_engaste' => $sheet->getCell('O' . $row)->getValue(),
                    'si2' => $sheet->getCell('P' . $row)->getValue(),
                    'medidas_de_embalaje' => $sheet->getCell('Q' . $row)->getValue(),
                    'si3' => $sheet->getCell('R' . $row)->getValue(),
                    'peso_de_servicio' => $sheet->getCell('S' . $row)->getValue(),
                    'si4' => $sheet->getCell('T' . $row)->getValue(),
                    'peso_de_envio' => $sheet->getCell('U' . $row)->getValue(),
                    'tipo_de_coneccion' => $sheet->getCell('W' . $row)->getValue(),
                    'eficiencia' => $sheet->getCell('X' . $row)->getValue(),
                    'caracteristica1' => $sheet->getCell('V' . $row)->getValue(),
                    'caracteristica2' => $sheet->getCell('Z' . $row)->getValue(),
                    'caracteristica3' => $sheet->getCell('AA' . $row)->getValue(),
                    'caracteristica4' => $sheet->getCell('AB' . $row)->getValue(),
                    'caracteristica5' => $sheet->getCell('AC' . $row)->getValue(),
                    'caracteristica6' => $sheet->getCell('AD' . $row)->getValue(),
                    'caracteristica7' => $sheet->getCell('AE' . $row)->getValue(),
                    'caracteristica8' => $sheet->getCell('AF' . $row)->getValue(),
                    'beneficio1' => $sheet->getCell('AG' . $row)->getValue(),
                    'beneficio2' => $sheet->getCell('AH' . $row)->getValue(),
                    'beneficio3' => $sheet->getCell('AI' . $row)->getValue(),
                    'beneficio4' => $sheet->getCell('AJ' . $row)->getValue(),
                    'beneficio5' => $sheet->getCell('AK' . $row)->getValue(),
                    'postventa' => $sheet->getCell('AL' . $row)->getValue(),
                    'imagen1' => $sheet->getCell('AM' . $row)->getValue(),
                    'imagen2' => $sheet->getCell('AN' . $row)->getValue(),
                    'imagen3' => $sheet->getCell('AO' . $row)->getValue(),
                    'imagen4' => $sheet->getCell('AP' . $row)->getValue(),
                    'video' => $sheet->getCell('AQ' . $row)->getValue(),
                    'video2' => $sheet->getCell('AR' . $row)->getValue(),
                    'video3' => $sheet->getCell('AS' . $row)->getValue(),
                    'video4' => $sheet->getCell('AT' . $row)->getValue(),
                    'ficha_tecnica_imagen1' => $sheet->getCell('AU' . $row)->getValue(),
                    'ficha_tecnica_imagen2' => $sheet->getCell('AV' . $row)->getValue(),
                    'ficha_tecnica_imagen3' => $sheet->getCell('AW' . $row)->getValue(),
                    'ficha_tecnica_imagen4' => $sheet->getCell('AX' . $row)->getValue(),
                    'manual_de_servicio' => $sheet->getCell('AY' . $row)->getValue(),
                    'ficha_tecnica_del_servicio' => $sheet->getCell('AZ' . $row)->getValue(),
                    'manual_de_instalacion' => $sheet->getCell('BA' . $row)->getValue(),
                    'logo' => $sheet->getCell('BB' . $row)->getValue(),
                    'vida_util' => $sheet->getCell('BC' . $row)->getValue(),
                    'plastico' => $sheet->getCell('BD' . $row)->getValue(),
                    'peso_plastico' => $sheet->getCell('BE' . $row)->getValue(),
                    'carton' => $sheet->getCell('BF' . $row)->getValue(),
                    'peso_carton' => $sheet->getCell('BG' . $row)->getValue(),
                    'papel' => $sheet->getCell('BH' . $row)->getValue(),
                    'peso_papel' => $sheet->getCell('BI' . $row)->getValue(),
                    'metal' => $sheet->getCell('BJ' . $row)->getValue(),
                    'peso_metal' => $sheet->getCell('BK' . $row)->getValue(),
                    'vidrio' => $sheet->getCell('BL' . $row)->getValue(),
                    'peso_vidrio' => $sheet->getCell('BM' . $row)->getValue(),
                    'madera' => $sheet->getCell('BN' . $row)->getValue(),
                    'peso_madera' => $sheet->getCell('BO' . $row)->getValue(),
                    'textil' => $sheet->getCell('BP' . $row)->getValue(),
                    'peso_textil' => $sheet->getCell('BQ' . $row)->getValue(),
                    'bateria_electrico' => $sheet->getCell('BR' . $row)->getValue(),
                    'peso_bateria_electrico' => $sheet->getCell('BS' . $row)->getValue(),
                    'impacto_ambiental' => $sheet->getCell('BT' . $row)->getValue()
                ];

                $startcount++;
            }

            if (count($data) > 0) {
                foreach ($data as $row_data) {
                    $service = new Service;
                    $service->reference = $row_data["referencia"];
                    $service->name = $row_data["categoria"] . " " . $row_data["marca"];
                    $service->shop_id = auth()->user()->shop_id;

                    if ($row_data["marca"] != "") {
                        $marca = Brand::firstOrCreate(
                            ['name' => $row_data["marca"]],
                            ['name' => $row_data["marca"]]
                        );
                    }

                    $service->brand_id = $marca->id;

                    $array_categories = array();

                    if ($row_data["categoria"] != "") {
                        $categorie = Category::firstOrCreate(
                            ['name' => $row_data["categoria"]],
                            [
                                'parent_id' => 0,
                                'level' => 0,
                                'name' => $row_data["categoria"],
                                'order_level' => 0,
                                'slug' => Str::slug($row_data["categoria"], '-') . '-' . strtolower(Str::random(5))
                            ]
                        );

                        array_push($array_categories, $categorie->id);

                        if ($row_data["subcategoria"] != "") {
                            $subcategorie = Category::firstOrCreate(
                                ['name' => $row_data["subcategoria"]],
                                [
                                    'parent_id' => $categorie->id,
                                    'level' => 1,
                                    'name' => $row_data["subcategoria"],
                                    'order_level' => 1,
                                    'slug' => Str::slug($row_data["subcategoria"], '-') . '-' . strtolower(Str::random(5))
                                ]
                            );

                            array_push($array_categories, $subcategorie->id);
                        }
                    }

                    if ($row_data["stock"] != "") {
                        $unidades = explode(" ", $row_data["stock"]);
                        $service->stock = $unidades[0];
                    }

                    $service->description = $row_data["referencia"] . " " . $row_data["subcategoria"] . " marca:" . $row_data["marca"] . " medidas:" . $row_data["medida_de_servicio"];
                    $service->published = 0;

                    $service->lowest_price  =  $row_data["precio"];
                    $service->highest_price =  $row_data["precio"];
                    $service->currency =  $row_data["divisa"];
                    $service->discount_type =  "flat";
                    $service->discount =  $row_data["descuento"];

                    if ($row_data["garantia"] != "") {
                        $service->has_warranty = 1;
                        $service->warranty_text = $row_data["garantia"];
                    } else {
                        $service->has_warranty = 0;
                    }

                    $service->shipping =  $row_data["envio"];
                    $service->intake =  $row_data["consumo"];
                    $service->material =  $row_data["material"];
                    $service->engaste =  $row_data["medida_de_engaste"];
                    $service->unit_metering =  $row_data["si1"];

                    $measures = explode("x", $row_data["medida_de_servicio"]);
                    if (count($measures) > 0) {
                        $service->width = $measures[0];
                    }
                    if (count($measures) > 1) {
                        $service->height = $measures[1];
                    }
                    if (count($measures) > 2) {
                        $service->length = $measures[2];
                    }

                    $service->slug = Str::slug($row_data["categoria"], '-') . '-' . strtolower(Str::random(5));

                    $service->si2 =  $row_data["si2"];
                    $service->medidas_de_embalaje =  $row_data["medidas_de_embalaje"];
                    $service->si3 =  $row_data["si3"];
                    $service->peso_de_servicio =  $row_data["peso_de_servicio"];
                    $service->si4 =  $row_data["si4"];
                    $service->peso_de_envio =  $row_data["peso_de_envio"];
                    $service->tipo_de_coneccion =  $row_data["tipo_de_coneccion"];
                    $service->eficiencia =  $row_data["eficiencia"];
                    $service->caracteristica1 =  $row_data["caracteristica1"];
                    $service->caracteristica2 =  $row_data["caracteristica2"];
                    $service->caracteristica3 =  $row_data["caracteristica3"];
                    $service->caracteristica4 =  $row_data["caracteristica4"];
                    $service->caracteristica5 =  $row_data["caracteristica5"];
                    $service->caracteristica6 =  $row_data["caracteristica6"];
                    $service->caracteristica7 =  $row_data["caracteristica7"];
                    $service->caracteristica8 =  $row_data["caracteristica8"];
                    $service->beneficio1 =  $row_data["beneficio1"];
                    $service->beneficio2 =  $row_data["beneficio2"];
                    $service->beneficio3 =  $row_data["beneficio3"];
                    $service->beneficio4 =  $row_data["beneficio4"];
                    $service->beneficio5 =  $row_data["beneficio5"];
                    $service->postventa =  $row_data["postventa"];

                    // Archives and images
                    $service->imagen1 = self::saveArchive($row_data["imagen1"]);
                    $service->imagen2 =  self::saveArchive($row_data["imagen2"]);
                    $service->imagen3 =  self::saveArchive($row_data["imagen3"]);
                    $service->imagen4 =  self::saveArchive($row_data["imagen4"]);
                    $service->video =  self::saveArchive($row_data["video"]);
                    $service->video2 =  self::saveArchive($row_data["video2"]);
                    $service->video3 =  self::saveArchive($row_data["video3"]);
                    $service->video4 =  self::saveArchive($row_data["video4"]);
                    $service->ficha_tecnica_imagen1 =  self::saveArchive($row_data["ficha_tecnica_imagen1"]);
                    $service->ficha_tecnica_imagen2 =  self::saveArchive($row_data["ficha_tecnica_imagen2"]);
                    $service->ficha_tecnica_imagen3 =  self::saveArchive($row_data["ficha_tecnica_imagen3"]);
                    $service->ficha_tecnica_imagen4 =  self::saveArchive($row_data["ficha_tecnica_imagen4"]);
                    $service->manual_de_servicio =  self::saveArchive($row_data["manual_de_servicio"]);
                    $service->ficha_tecnica_del_servicio =  self::saveArchive($row_data["ficha_tecnica_del_servicio"]);
                    $service->manual_de_instalacion =  self::saveArchive($row_data["manual_de_instalacion"]);
                    $service->thumbnail_img =  self::saveArchive($row_data["logo"]);

                    $service->vida_util =  $row_data["vida_util"];
                    $service->plastico =  $row_data["plastico"];
                    $service->peso_plastico =  $row_data["peso_plastico"];
                    $service->carton =  $row_data["carton"];
                    $service->peso_carton =  $row_data["peso_carton"];
                    $service->papel =  $row_data["papel"];
                    $service->peso_papel =  $row_data["peso_papel"];
                    $service->metal =  $row_data["metal"];
                    $service->peso_metal =  $row_data["peso_metal"];
                    $service->vidrio =  $row_data["vidrio"];
                    $service->peso_vidrio =  $row_data["peso_vidrio"];
                    $service->madera =  $row_data["madera"];
                    $service->peso_madera =  $row_data["peso_madera"];
                    $service->textil =  $row_data["textil"];
                    $service->peso_textil =  $row_data["peso_textil"];
                    $service->bateria_electrico =  $row_data["bateria_electrico"];
                    $service->peso_bateria_electrico =  $row_data["peso_bateria_electrico"];
                    $service->impacto_ambiental =  $row_data["impacto_ambiental"];

                    $service->save();

                    if (count($array_categories) > 0) {
                        $service->categories()->sync($array_categories);
                    }
                }
            }
        } catch (Exception $e) {
            $error_code = $e->errorInfo[1];
            return back()->withErrors('There was a problem uploading the data!');
        }

        flash(translate('Services has been inserted successfully'))->success();
        return redirect()->route('service.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return view('backend.service.services.show', [
            'service' => Service::withCount('reviews', 'wishlists', 'carts')->with('variations.combinations')->findOrFail($id)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
        $service = Service::findOrFail($id);

        if ($service->shop_id != auth()->user()->shop_id) {
            abort(403);
        }

        $lang = $request->lang;
        $categories = Category::where('level', 0)->get();
        $all_attributes = Attribute::get();
        return view('backend.service.services.edit', compact('service', 'categories', 'lang', 'all_attributes'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        if ($request->has('is_variant') && !$request->has('variations')) {
            flash(translate('Invalid service variations'))->error();
            return redirect()->back();
        }

        $service                    = Service::findOrFail($id);
        $oldService                 = clone $service;

        if ($service->shop_id != auth()->user()->shop_id) {
            abort(403);
        }

        if ($request->lang == env("DEFAULT_LANGUAGE")) {
            $service->name          = $request->name;
            $service->unit          = $request->unit;
            $service->description   = $request->description;
        }

        $service->brand_id          = $request->brand_id;
        CoreComponentRepository::instantiateShopRepository();
        $service->min_qty           = $request->min_qty;
        $service->max_qty           = $request->max_qty;
        $service->photos            = $request->photos;
        $service->thumbnail_img     = $request->thumbnail_img;
        $service->published         = $request->status;

        // Service Translations
        $service_translation                = ServiceTranslation::firstOrNew(['lang' => $request->lang, 'service_id' => $service->id]);
        $service_translation->name          = $request->name;
        $service_translation->unit          = $request->unit;
        $service_translation->description   = $request->description;
        $service_translation->save();


        // SEO meta
        $service->meta_title        = (!is_null($request->meta_title)) ? $request->meta_title : $service->name;
        $service->meta_description  = (!is_null($request->meta_description)) ? $request->meta_description : strip_tags($service->description);
        $service->meta_image        = (!is_null($request->meta_image)) ? $request->meta_image : $service->thumbnail_img;
        $service->slug              = (!is_null($request->slug)) ? Str::slug($request->slug, '-') : Str::slug($request->name, '-') . '-' . strtolower(Str::random(5));

        // warranty
        $service->has_warranty      = $request->has('has_warranty') && $request->has_warranty == 'on' ? 1 : 0;


        // tag
        $tags                       = array();
        if ($request->tags != null) {
            foreach (json_decode($request->tags) as $key => $tag) {
                array_push($tags, $tag->value);
            }
        }
        $service->tags              = implode(',', $tags);

        // lowest highest price
        if ($request->has('is_variant') && $request->has('variations')) {
            $service->lowest_price  =  min(array_column($request->variations, 'price'));
            $service->highest_price =  max(array_column($request->variations, 'price'));
        } else {
            $service->lowest_price  =  $request->price;
            $service->highest_price =  $request->price;
        }

        // stock based on all variations
        $service->stock             = ($request->has('is_variant') && $request->has('variations')) ? max(array_column($request->variations, 'stock')) : $request->stock;

        // discount
        $service->discount          = $request->discount;
        $service->discount_type     = $request->discount_type;

        if ($request->date_range != null) {
            $date_var               = explode(" to ", $request->date_range);
            $service->discount_start_date = strtotime($date_var[0]);
            $service->discount_end_date   = strtotime($date_var[1]);
        }

        // shipping info
        $service->standard_delivery_time    = $request->standard_delivery_time;
        $service->express_delivery_time     = $request->express_delivery_time;
        $service->weight                    = $request->weight;
        $service->height                    = $request->height;
        $service->length                    = $request->length;
        $service->width                     = $request->width;

        // category
        $service->categories()->sync($request->category_ids);

        // shop category ids
        $shop_category_ids = [];
        foreach ($request->category_ids ?? [] as $id) {
            $shop_category_ids[] = CategoryUtility::get_grand_parent_id($id);
        }

        // this get error
        //$shop_category_ids =  array_merge(array_filter($shop_category_ids), $service->shop->shop_categories->pluck('category_id')->toArray());
        //$service->shop->categories()->sync($shop_category_ids);

        // shop brand
        if ($request->brand_id && $service->shop_id) {
            ShopBrand::updateOrCreate([
                'shop_id' => $service->shop_id,
                'brand_id' => $request->brand_id,
            ]);
        }

        // taxes
        $tax_data = array();
        $tax_ids = array();

        if ($request->has('taxes')) {
            foreach ($request->taxes as $key => $tax) {
                array_push($tax_data, [
                    'tax' => $tax,
                    'tax_type' => $request->tax_types[$key]
                ]);
            }
            $tax_ids = $request->tax_ids;
        }

        $taxes = array_combine($tax_ids, $tax_data);

        $service->service_taxes()->sync($taxes);


        //service variation
        $service->is_variant        = ($request->has('is_variant') && $request->has('variations')) ? 1 : 0;

        if ($request->has('is_variant') && $request->has('variations')) {

            $requested_variations = collect($request->variations);
            $requested_variations_code = $requested_variations->pluck('code')->toArray();
            $old_variations_codes = $service->variations->pluck('code')->toArray();
            $old_matched_variations = $requested_variations->whereIn('code', $old_variations_codes);
            $new_variations = $requested_variations->whereNotIn('code', $old_variations_codes);


            // delete old variations that didn't requested
            $service->variations->whereNotIn('code', $requested_variations_code)->each(function ($variation) {
                foreach ($variation->combinations as $comb) {
                    $comb->delete();
                }

                $variation->delete();
            });

            // update old matched variations
            foreach ($old_matched_variations as $variation) {
                $p_variation              = ServiceVariation::where('service_id', $service->id)->where('code', $variation['code'])->first();
                $p_variation->price       = $variation['price'];
                $p_variation->stock       = $variation['stock'];
                $p_variation->sku         = $variation['sku'];
                $p_variation->img         = $variation['img'];
                $p_variation->save();
            }


            // insert new requested variations
            foreach ($new_variations as $variation) {
                $p_variation              = new ServiceVariation;
                $p_variation->service_id  = $service->id;
                $p_variation->code        = $variation['code'];
                $p_variation->price       = $variation['price'];
                $p_variation->stock       = $variation['stock'];
                $p_variation->sku         = $variation['sku'];
                $p_variation->img         = $variation['img'];
                $p_variation->save();

                foreach (array_filter(explode("/", $variation['code'])) as $combination) {
                    $p_variation_comb                         = new ServiceVariationCombination;
                    $p_variation_comb->service_id             = $service->id;
                    $p_variation_comb->service_variation_id   = $p_variation->id;
                    $p_variation_comb->attribute_id           = explode(":", $combination)[0];
                    $p_variation_comb->attribute_value_id     = explode(":", $combination)[1];
                    $p_variation_comb->save();
                }
            }
        } else {
            // check if old service is variant then delete all old variation & combinations
            if ($oldService->is_variant) {
                foreach ($service->variations as $variation) {
                    foreach ($variation->combinations as $comb) {
                        $comb->delete();
                    }

                    $variation->delete();
                }
            }

            $variation              = $service->variations->first();

            if ($variation) {
                $variation->service_id  = $service->id;
                $variation->code        = null;
                $variation->sku         = $request->sku;
                $variation->price       = $request->price;
                $variation->stock       = $request->stock;
                $variation->save();
            }
        }


        // attributes + values
        foreach ($service->attributes as $attr) {
            $attr->delete();
        }

        foreach ($service->attribute_values as $attr_val) {
            $attr_val->delete();
        }

        if ($request->has('service_attributes') && $request->service_attributes[0] != null) {
            foreach ($request->service_attributes as $attr_id) {
                $attribute_values = 'attribute_' . $attr_id . '_values';

                if ($request->has($attribute_values) && $request->$attribute_values != null) {
                    $p_attribute = new ServiceAttribute;
                    $p_attribute->service_id = $service->id;
                    $p_attribute->attribute_id = $attr_id;
                    $p_attribute->save();

                    foreach ($request->$attribute_values as $val_id) {
                        $p_attr_value = new ServiceAttributeValue;
                        $p_attr_value->service_id = $service->id;
                        $p_attr_value->attribute_id = $attr_id;
                        $p_attr_value->attribute_value_id = $val_id;
                        $p_attr_value->save();
                    }
                }
            }
        }

        $service->reference =  $request->reference;
        $service->currency =  $request->currency;
        $service->shipping =  $request->shipping;
        $service->material =  $request->material;
        $service->intake =  $request->intake;
        $service->engaste =  $request->engaste;
        $service->warranty_text =  $request->warranty_text;

        $service->si2 =  $request->si2;
        $service->medidas_de_embalaje =  $request->medidas_de_embalaje;
        $service->si3 =  $request->si3;
        $service->peso_de_servicio =  $request->peso_de_servicio;
        $service->si4 =  $request->si4;
        $service->peso_de_envio =  $request->peso_de_envio;
        $service->tipo_de_coneccion =  $request->tipo_de_coneccion;
        $service->eficiencia =  $request->eficiencia;
        $service->caracteristica1 =  $request->caracteristica1;
        $service->caracteristica2 =  $request->caracteristica2;
        $service->caracteristica3 =  $request->caracteristica3;
        $service->caracteristica4 =  $request->caracteristica4;
        $service->caracteristica5 =  $request->caracteristica5;
        $service->caracteristica6 =  $request->caracteristica6;
        $service->caracteristica7 =  $request->caracteristica7;
        $service->caracteristica8 =  $request->caracteristica8;
        $service->beneficio1 =  $request->beneficio1;
        $service->beneficio2 =  $request->beneficio2;
        $service->beneficio3 =  $request->beneficio3;
        $service->beneficio4 =  $request->beneficio4;
        $service->beneficio5 =  $request->beneficio5;
        $service->postventa =  $request->postventa;
        $service->imagen1 = $request->imagen1;
        $service->imagen2 =  $request->imagen2;
        $service->imagen3 =  $request->imagen3;
        $service->imagen4 =  $request->imagen4;
        $service->video =  $request->video;
        $service->video2 =  $request->video2;
        $service->video3 =  $request->video3;
        $service->video4 =  $request->video4;
        $service->ficha_tecnica_imagen1 =  $request->ficha_tecnica_imagen1;
        $service->ficha_tecnica_imagen2 =  $request->ficha_tecnica_imagen2;
        $service->ficha_tecnica_imagen3 =  $request->ficha_tecnica_imagen3;
        $service->ficha_tecnica_imagen4 =  $request->ficha_tecnica_imagen4;
        $service->manual_de_servicio =  $request->manual_de_servicio;
        $service->ficha_tecnica_del_servicio =  $request->ficha_tecnica_del_servicio;
        $service->manual_de_instalacion =  $request->manual_de_instalacion;
        $service->thumbnail_img =  $request->thumbnail_img;
        $service->vida_util =  $request->vida_util;
        $service->plastico =  $request->plastico;
        $service->peso_plastico =  $request->peso_plastico;
        $service->carton =  $request->carton;
        $service->peso_carton =  $request->peso_carton;
        $service->papel =  $request->papel;
        $service->peso_papel =  $request->peso_papel;
        $service->metal =  $request->metal;
        $service->peso_metal =  $request->peso_metal;
        $service->vidrio =  $request->vidrio;
        $service->peso_vidrio =  $request->peso_vidrio;
        $service->madera =  $request->madera;
        $service->peso_madera =  $request->peso_madera;
        $service->textil =  $request->textil;
        $service->peso_textil =  $request->peso_textil;
        $service->bateria_electrico =  $request->bateria_electrico;
        $service->peso_bateria_electrico =  $request->peso_bateria_electrico;
        $service->impacto_ambiental =  $request->impacto_ambiental;

        $service->save();

        flash(translate('Service has been updated successfully'))->success();
        return redirect()->route('service.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $service = Service::findOrFail($id);
        $service->service_translations()->delete();
        $service->variations()->delete();
        $service->variation_combinations()->delete();
        $service->reviews()->delete();
        $service->service_categories()->delete();
        $service->carts()->delete();
        $service->offers()->delete();
        $service->wishlists()->delete();
        $service->attributes()->delete();
        $service->attribute_values()->delete();
        $service->taxes()->delete();

        if (Service::destroy($id)) {
            flash(translate('Service has been deleted successfully'))->success();
            return redirect()->route('service.index');
        } else {
            flash(translate('Something went wrong'))->error();
            return back();
        }
    }

    /**
     * Duplicates the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function duplicate(Request $request, $id)
    {
        $service = Service::find($id);
        $service_new = $service->replicate();
        $service_new->slug = Str::slug($service_new->name, '-') . '-' . strtolower(Str::random(5));

        if ($service_new->save()) {

            // variation duplicate
            foreach ($service->variations as $key => $variation) {
                $p_variation              = new ServiceVariation;
                $p_variation->service_id  = $service_new->id;
                $p_variation->code        = $variation->code;
                $p_variation->price       = $variation->price;
                $p_variation->stock       = $variation->stock;
                $p_variation->sku         = $variation->sku;
                $p_variation->img         = $variation->img;
                $p_variation->save();

                // variation combination duplicate
                foreach ($variation->combinations as $key => $combination) {
                    $p_variation_comb                         = new ServiceVariationCombination;
                    $p_variation_comb->service_id             = $service_new->id;
                    $p_variation_comb->service_variation_id   = $p_variation->id;
                    $p_variation_comb->attribute_id           = $combination->attribute_id;
                    $p_variation_comb->attribute_value_id     = $combination->attribute_value_id;
                    $p_variation_comb->save();
                }
            }

            // attribute duplicate
            foreach ($service->attributes as $key => $attribute) {
                $p_attribute                = new ServiceAttribute;
                $p_attribute->service_id    = $service_new->id;
                $p_attribute->attribute_id  = $attribute->attribute_id;
                $p_attribute->save();
            }

            // attribute value duplicate
            foreach ($service->attribute_values as $key => $attribute_value) {
                $p_attr_value                       = new ServiceAttributeValue;
                $p_attr_value->service_id           = $service_new->id;
                $p_attr_value->attribute_id         = $attribute_value->attribute_id;
                $p_attr_value->attribute_value_id   = $attribute_value->attribute_value_id;
                $p_attr_value->save();
            }

            // translation duplicate
            foreach ($service->service_translations as $key => $translation) {
                $service_translation                = new ServiceTranslation;
                $service_translation->service_id    = $service_new->id;
                $service_translation->name          = $translation->name;
                $service_translation->unit          = $translation->unit;
                $service_translation->description   = $translation->description;
                $service_translation->lang          = $translation->lang;
                $service_translation->save();
            }

            //categories duplicate
            foreach ($service->service_categories as $key => $category) {
                $p_category                 = new ServiceCategory;
                $p_category->service_id     = $service_new->id;
                $p_category->category_id    = $category->category_id;
                $p_category->save();
            }

            // taxes duplicate
            foreach ($service->taxes as $key => $tax) {
                $p_tax                = new ServiceTax;
                $p_tax->service_id    = $service_new->id;
                $p_tax->tax_id        = $tax->tax_id;
                $p_tax->tax           = $tax->tax;
                $p_tax->tax_type      = $tax->tax_type;
                $p_tax->save();
            }

            flash(translate('Service has been duplicated successfully'))->success();
            return redirect()->route('service.index');
        } else {
            flash(translate('Something went wrong'))->error();
            return back();
        }
    }

    public function get_services_by_subcategory(Request $request)
    {
        $services = Service::where('subcategory_id', $request->subcategory_id)->get();
        return $services;
    }

    public function get_services_by_brand(Request $request)
    {
        $services = Service::where('brand_id', $request->brand_id)->get();
        return view('partials.service_select', compact('services'));
    }

    public function updatePublished(Request $request)
    {
        $service = Service::findOrFail($request->id);
        $service->published = $request->status;
        $service->save();

        cache_clear();

        return 1;
    }

    public function sku_combination(Request $request)
    {
        $option_choices = array();

        if ($request->has('service_options')) {
            $service_options = $request->service_options;
            sort($service_options, SORT_NUMERIC);

            foreach ($service_options as $key => $option) {

                $option_name = 'option_' . $option . '_choices';
                $choices = array();

                if ($request->has($option_name)) {

                    $service_option_values = $request[$option_name];
                    sort($service_option_values, SORT_NUMERIC);

                    foreach ($service_option_values as $key => $item) {
                        array_push($choices, $item);
                    }

                    $option_choices[$option] =  $choices;
                }
            }
        }

        $combinations = array(array());

        foreach ($option_choices as $property => $property_values) {
            $tmp = array();

            foreach ($combinations as $combination_item) {
                foreach ($property_values as $property_value) {
                    $tmp[] = $combination_item + array($property => $property_value);
                }
            }

            $combinations = $tmp;
        }

        return view('backend.service.services.sku_combinations', compact('combinations'))->render();
    }

    public function new_attribute(Request $request)
    {
        $attributes = Attribute::query();
        if ($request->has('service_attributes')) {
            foreach ($request->service_attributes as $key => $value) {
                if ($value == NULL) {
                    return array(
                        'count' => -1,
                        'view' => view('backend.service.services.new_attribute', compact('attributes'))->render(),
                    );
                }
            }

            $attributes->whereNotIn('id', array_diff($request->service_attributes, [null]));
        }

        $attributes = $attributes->get();

        return array(
            'count' => count($attributes),
            'view' => view('backend.service.services.new_attribute', compact('attributes'))->render(),
        );
    }

    public function get_attribute_values(Request $request)
    {
        $attribute_id = $request->attribute_id;
        $attribute_values = AttributeValue::where('attribute_id', $attribute_id)->get();

        return view('backend.service.services.new_attribute_values', compact('attribute_values', 'attribute_id'));
    }

    public function new_option(Request $request)
    {
        $attributes = Attribute::query();

        if ($request->has('service_options')) {
            foreach ($request->service_options as $key => $value) {
                if ($value == NULL) {
                    return array(
                        'count' => -1,
                        'view' => view('backend.service.services.new_option', compact('attributes'))->render(),
                    );
                }
            }

            $attributes->whereNotIn('id', array_diff($request->service_options, [null]));

            if (count($request->service_options) === 3) {
                return array(
                    'count' => -2,
                    'view' => view('backend.service.services.new_option', compact('attributes'))->render(),
                );
            }
        }

        $attributes = $attributes->get();

        return array(
            'count' => count($attributes),
            'view' => view('backend.service.services.new_option', compact('attributes'))->render(),
        );
    }

    public function get_option_choices(Request $request)
    {

        $attribute_id = $request->attribute_id;
        $attribute_values = AttributeValue::where('attribute_id', $attribute_id)->get();

        return view('backend.service.services.new_option_choices', compact('attribute_values', 'attribute_id'));
    }
}
