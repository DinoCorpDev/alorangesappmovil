<?php

namespace App\Http\Controllers;

use App\Models\Collection;
use App\Models\CollectionProduct;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Str;
use App\Models\Upload;
use Auth;

use PhpOffice\PhpSpreadsheet\Reader\Exception;
use PhpOffice\PhpSpreadsheet\IOFactory;

class CollectionController extends Controller
{

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
        $collections = Collection::orderBy('created_at', 'desc');

        if ($request->search != null) {
            $products = $products->where('name', 'like', '%' . $request->search . '%');
            $sort_search = $request->search;
        }

        if ($request->type != null) {
            $var = explode(",", $request->type);
            $col_name = $var[0];
            $query = $var[1];
            $products = $products->orderBy($col_name, $query);
            $sort_type = $request->type;
        }

        $collections = $collections->paginate(15);
        $type = 'All';

        return view('backend.collections.index', compact('collections', 'type', 'col_name', 'query', 'sort_search'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::where('level', 0)->get();
        return view('backend.collections.create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $collection                    = new Collection;
        $collection->coleccion              = $request->coleccion;
        $collection->marca          = $request->brand_id;
        $collection->descripcion       = $request->description;
        $collection->status         = $request->status;
        $collection->slug              = Str::slug($request->coleccion, '-') . '-' . strtolower(Str::random(5));
        $collection->stock = $request->stock;
        $collection->descuento          = $request->descuento;
        $collection->referencia          = $request->referencia;
        $collection->precio          = $request->precio;
        $collection->divisa          = $request->divisa;
        $collection->garantia          = $request->garantia;
        $collection->envio          = $request->envio;
        $collection->material          = $request->material;
        $collection->medida_de_proyecto          = $request->medida_de_proyecto;
        $collection->si1          = $request->si1;
        $collection->aforo          = $request->aforo;
        $collection->diagrama_proyecto          = $request->diagrama_proyecto;
        $collection->imagen1          = $request->imagen1;
        $collection->imagen2          = $request->imagen2;
        $collection->imagen3          = $request->imagen3;
        $collection->imagen4          = $request->imagen4;
        $collection->video1          = $request->video1;
        $collection->video2          = $request->video2;
        $collection->video3          = $request->video3;
        $collection->video4          = $request->video4;

        if (isset($request->category_ids)) {
            try {
                $collection->categoria = $request->category_ids[0];
            } catch (\Throwable $th) {
                //
            }

            try {
                $collection->subcategoria = $request->category_ids[1];
            } catch (\Throwable $th) {
                //
            }
        }

        $collection->save();

        flash(translate('Collection  has been inserted successfully'))->success();
        return redirect()->route('collection.index');
    }

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

            foreach ($row_range as $row) {
                $data[] = [
                    'referencia' => $sheet->getCell('A' . $row)->getValue(),
                    'coleccion' => $sheet->getCell('B' . $row)->getValue(),
                    'categoria' => $sheet->getCell('C' . $row)->getValue(),
                    'subcategoria' => $sheet->getCell('D' . $row)->getValue(),
                    'marca' => $sheet->getCell('E' . $row)->getValue(),
                    'precio' => preg_replace('/[^0-9]/', '', $sheet->getCell('F' . $row)->getValue()),
                    'descuento' => preg_replace('/[^0-9]/', '', $sheet->getCell('G' . $row)->getValue()),
                    'divisa' => $sheet->getCell('H' . $row)->getValue(),
                    'stock' => preg_replace('/[^0-9]/', '', $sheet->getCell('I' . $row)->getValue()),
                    'garantia' => $sheet->getCell('J' . $row)->getValue(),
                    'envio' => $sheet->getCell('K' . $row)->getValue(),
                    'descripcion' => $sheet->getCell('L' . $row)->getValue(),
                    'material' => $sheet->getCell('M' . $row)->getValue(),
                    'medida_de_proyecto' => $sheet->getCell('N' . $row)->getValue(),
                    'si1' => $sheet->getCell('O' . $row)->getValue(),
                    'aforo' => $sheet->getCell('P' . $row)->getValue(),
                    'diagrama_de_proyecto' => $sheet->getCell('Q' . $row)->getValue(),
                    'postventa' => $sheet->getCell('R' . $row)->getValue(),
                    'imagen1' => $sheet->getCell('S' . $row)->getValue(),
                    'imagen2' => $sheet->getCell('T' . $row)->getValue(),
                    'imagen3' => $sheet->getCell('U' . $row)->getValue(),
                    'imagen4' => $sheet->getCell('V' . $row)->getValue(),
                    'video1' => $sheet->getCell('W' . $row)->getValue(),
                    'video2' => $sheet->getCell('X' . $row)->getValue(),
                    'video3' => $sheet->getCell('Y' . $row)->getValue(),
                    'video4' => $sheet->getCell('Z' . $row)->getValue()
                ];

                $startcount++;
            }

            if (count($data) > 0) {
                foreach ($data as $row_data) {
                    $collection                    = new Collection;
                    $collection->coleccion         = $row_data["coleccion"];
                    //$collection->marca          = $row_data["marca"];
                    $collection->descripcion       = $row_data["descripcion"];

                    $collection->slug              = Str::slug($row_data["coleccion"], '-') . '-' . strtolower(Str::random(5));
                    $collection->stock              = $row_data["stock"];
                    $collection->descuento          = $row_data["descuento"];
                    $collection->referencia       = $row_data["referencia"];
                    $collection->precio          = $row_data["precio"];
                    $collection->divisa          = $row_data["divisa"];
                    $collection->garantia        = $row_data["garantia"];
                    $collection->envio           = $row_data["envio"];
                    $collection->material        = $row_data["material"];
                    $collection->medida_de_proyecto          = $row_data["medida_de_proyecto"];
                    $collection->si1          = $row_data["si1"];
                    $collection->aforo        = $row_data["aforo"];


                    $collection->diagrama_proyecto   = self::saveArchive($row_data["diagrama_proyecto"]);
                    $collection->imagen1          = self::saveArchive($row_data["imagen1"]);
                    $collection->imagen2          = self::saveArchive($row_data["imagen2"]);
                    $collection->imagen3          = self::saveArchive($row_data["imagen3"]);
                    $collection->imagen4          = self::saveArchive($row_data["imagen4"]);
                    $collection->video1          = self::saveArchive($row_data["video1"]);
                    $collection->video2          = self::saveArchive($row_data["video2"]);
                    $collection->video3          = self::saveArchive($row_data["video3"]);
                    $collection->video4          = self::saveArchive($row_data["video4"]);

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
                        $collection->categoria = $categorie->id;
                    }

                    if ($row_data["subcategoria"] != "") {
                        $subcategorie = Category::firstOrCreate(
                            ['name' => $row_data["subcategoria"]],
                            [
                                'parent_id' => 0,
                                'level' => 0,
                                'name' => $row_data["subcategoria"],
                                'order_level' => 0,
                                'slug' => Str::slug($row_data["subcategoria"], '-') . '-' . strtolower(Str::random(5))
                            ]
                        );
                        $collection->subcategoria = $subcategorie->id;
                    }

                    if ($row_data["marca"] != "") {
                        $marca = Brand::firstOrCreate(
                            ['name' => $row_data["marca"]],
                            ['name' => $row_data["marca"]]
                        );
                        $collection->marca = $marca->id;
                    }

                    $collection->save();
                }
            }
        } catch (Exception $e) {
            $error_code = $e->errorInfo[1];
            return back()->withErrors('There was a problem uploading the data!');
        }

        flash(translate('Collections has been inserted successfully'))->success();
        return redirect()->route('collection.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Collection  $collection
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return view('backend.collections.show', [
            'collection' => Collection::findOrFail($id),
            "products" => CollectionProduct::where("id_collection", $id)->get()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Collection  $collection
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $collection = Collection::findOrFail($id);
        $categories = Category::where('level', 0)->get();

        return view('backend.collections.edit', compact('collection', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Collection  $collection
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $collection                    = Collection::findOrFail($id);
        $collection->coleccion              = $request->coleccion;
        $collection->marca          = $request->brand_id;
        $collection->descripcion       = $request->description;
        $collection->status         = $request->status;
        $collection->slug              = Str::slug($request->coleccion, '-') . '-' . strtolower(Str::random(5));
        $collection->stock = $request->stock;
        $collection->descuento          = $request->descuento;
        $collection->referencia          = $request->referencia;
        $collection->precio          = $request->precio;
        $collection->divisa          = $request->divisa;
        $collection->garantia          = $request->garantia;
        $collection->envio          = $request->envio;
        $collection->material          = $request->material;
        $collection->medida_de_proyecto          = $request->medida_de_proyecto;
        $collection->si1          = $request->si1;
        $collection->aforo          = $request->aforo;
        $collection->diagrama_proyecto          = $request->diagrama_proyecto;
        $collection->imagen1          = $request->imagen1;
        $collection->imagen2          = $request->imagen2;
        $collection->imagen3          = $request->imagen3;
        $collection->imagen4          = $request->imagen4;
        $collection->video1          = $request->video1;
        $collection->video2          = $request->video2;
        $collection->video3          = $request->video3;
        $collection->video4          = $request->video4;

        if (isset($request->category_ids)) {
            try {
                $collection->categoria = $request->category_ids[0];
            } catch (\Throwable $th) {
                //
            }

            try {
                $collection->subcategoria = $request->category_ids[1];
            } catch (\Throwable $th) {
                //
            }
        }

        $collection->save();

        flash(translate('Collection  has been update successfully'))->success();
        return redirect()->route('collection.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Collection  $collection
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Collection::findOrFail($id);
        if (Collection::destroy($id)) {
            flash(translate('Collection has been deleted successfully'))->success();
            return redirect()->route('collection.index');
        } else {
            flash(translate('Something went wrong'))->error();
            return back();
        }
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


    public function add(Request $request, $id)
    {
        $collection = Collection::findOrFail($id);

        $col_name = null;
        $query = null;
        $sort_search = null;
        $products = Product::orderBy('created_at', 'desc')->where('shop_id', auth()->user()->shop_id);

        if ($request->search != null) {
            $products = $products->where('name', 'like', '%' . $request->search . '%');
            $sort_search = $request->search;
        }

        if ($request->type != null) {
            $var = explode(",", $request->type);
            $col_name = $var[0];
            $query = $var[1];
            $products = $products->orderBy($col_name, $query);
            $sort_type = $request->type;
        }

        $products = $products->paginate(15);
        $type = 'All';

        return view('backend.collections.add', compact('products', 'type', 'col_name', 'query', 'sort_search', 'collection'));
    }

    public function addProduct($id, $idProduct)
    {
        $product = new CollectionProduct;
        $product->id_collection = $id;
        $product->id_product = $idProduct;
        $product->save();

        flash(translate('Product has been added successfully'))->success();
        return back();
    }

    public function destroyProduct($id)
    {
        CollectionProduct::destroy($id);

        flash(translate('Product has been delete successfully'))->success();
        return back();
    }
}
