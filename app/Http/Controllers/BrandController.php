<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\BrandTranslation;
use App\Models\Brand;
use App\Models\Product;

use PhpOffice\PhpSpreadsheet\Reader\Exception;
use PhpOffice\PhpSpreadsheet\IOFactory;

class BrandController extends Controller
{
    public function __construct()
    {
        $this->middleware(['permission:show_brands'])->only('index');
        $this->middleware(['permission:add_brands'])->only('store');
        $this->middleware(['permission:edit_brands'])->only('edit');
        $this->middleware(['permission:delete_brands'])->only('destroy');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $sort_search =null;
        $brands = Brand::orderBy('created_at', 'desc');
        if ($request->has('search')){
            $sort_search = $request->search;
            $brands = $brands->where('name', 'like', '%'.$sort_search.'%');
        }
        $brands = $brands->paginate(15);
        return view('backend.product.brands.index', compact('brands', 'sort_search'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $brand = new Brand;
        $brand->name = $request->name;
        $brand->meta_title = $request->meta_title;
        $brand->meta_description = $request->meta_description;
        if ($request->slug != null) {
            $brand->slug = str_replace(' ', '-', $request->slug);
        }
        else {
            $brand->slug = preg_replace('/[^A-Za-z0-9\-]/', '', str_replace(' ', '-', $request->name)).'-'.Str::random(5);
        }

        $brand->logo = $request->logo;
        $brand->meta_title =  $request->name;
        $brand->meta_description = $request->resumen;
        $brand->biografia = $request->biografia;
        $brand->banner = $request->banner;
        $brand->fundacion = $request->fundacion;
        $brand->ensamblado = $request->ensamblado;
        $brand->segmento1 = $request->segmento1;
        $brand->segmento2 = $request->segmento2;
        $brand->segmento3 = $request->segmento3;
        $brand->segmento4 = $request->segmento4;
        $brand->linea1 = $request->linea1;
        $brand->linea2 = $request->linea2;
        $brand->linea3 = $request->linea3;
        $brand->linea4 = $request->linea4;
        $brand->diseno = $request->diseno;
        $brand->resumen = $request->resumen;
        $brand->pais = $request->pais;

        $brand->save();

        $brand_translation = BrandTranslation::firstOrNew(['lang' => env('DEFAULT_LANGUAGE'), 'brand_id' => $brand->id]);
        $brand_translation->name = $request->name;
        $brand_translation->save();

        flash(translate('Brand has been inserted successfully'))->success();
        return redirect()->route('brands.index');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
     public function edit(Request $request, $id)
     {
        $lang   = $request->lang;
        $brand  = Brand::findOrFail($id);
        return view('backend.product.brands.edit', compact('brand','lang'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $brand = Brand::findOrFail($id);
        if($request->lang == env("DEFAULT_LANGUAGE")){
            $brand->name = $request->name;
        }
        $brand->meta_title = $request->meta_title;
        $brand->meta_description = $request->meta_description;
        if ($request->slug != null) {
            $brand->slug = str_replace(' ', '-', $request->slug);
        }
        else {
            $brand->slug = preg_replace('/[^A-Za-z0-9\-]/', '', str_replace(' ', '-', $request->name)).'-'.Str::random(5);
        }
        $brand->logo = $request->logo;
        $brand->meta_title =  $request->name;
        $brand->meta_description = $request->resumen;
        $brand->biografia = $request->biografia;
        $brand->banner = $request->banner;
        $brand->fundacion = $request->fundacion;
        $brand->ensamblado = $request->ensamblado;
        $brand->segmento1 = $request->segmento1;
        $brand->segmento2 = $request->segmento2;
        $brand->segmento3 = $request->segmento3;
        $brand->segmento4 = $request->segmento4;
        $brand->linea1 = $request->linea1;
        $brand->linea2 = $request->linea2;
        $brand->linea3 = $request->linea3;
        $brand->linea4 = $request->linea4;
        $brand->diseno = $request->diseno;
        $brand->resumen = $request->resumen;
        $brand->pais = $request->pais;
        $brand->save();

        $brand_translation = BrandTranslation::firstOrNew(['lang' => $request->lang, 'brand_id' => $brand->id]);
        $brand_translation->name = $request->name;
        $brand_translation->save();

        flash(translate('Brand has been updated successfully'))->success();
        return redirect()->route('brands.index');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $brand = Brand::findOrFail($id);
        Product::where('brand_id', $brand->id)->delete();
        foreach ($brand->brand_translations as $key => $brand_translation) {
            $brand_translation->delete();
        }
        Brand::destroy($id);

        flash(translate('Brand has been deleted successfully'))->success();
        return redirect()->route('brands.index');

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
            $column_range = range('Q', $column_limit);
            $startcount = 2;
            $data = array();
        
            foreach ($row_range as $row) {
                $data[] = [
                    'biografia' => $sheet->getCell('A' . $row)->getValue(),
                    'banner' => $sheet->getCell('B' . $row)->getValue(),
                    'logo' => $sheet->getCell('C' . $row)->getValue(),
                    'marca' => $sheet->getCell('D' . $row)->getValue(),
                    'pais' => $sheet->getCell('E' . $row)->getValue(),
                    'fundacion' => $sheet->getCell('F' . $row)->getValue(),
                    'ensamblado' => $sheet->getCell('G' . $row)->getValue(),
                    'segmento1' => $sheet->getCell('H' . $row)->getValue(),
                    'segmento2' => $sheet->getCell('I' . $row)->getValue(),
                    'segmento3' => $sheet->getCell('J' . $row)->getValue(),
                    'segmento4' => $sheet->getCell('K' . $row)->getValue(),
                    'linea1' => $sheet->getCell('L' . $row)->getValue(),
                    'linea2' => $sheet->getCell('M' . $row)->getValue(),
                    'linea3' => $sheet->getCell('N' . $row)->getValue(),
                    'linea4' => $sheet->getCell('O' . $row)->getValue(),
                    'diseno' => $sheet->getCell('P' . $row)->getValue(),
                    'resumen' => $sheet->getCell('Q' . $row)->getValue()
                ];

                $startcount++;
            }

            if (count($data) > 0) {
                foreach ($data as $row_data) {
                    $brand = new Brand;
                    $brand->name = $row_data["marca"];
                    $brand->logo = self::saveArchive($row_data["logo"]);
                    $brand->slug = preg_replace('/[^A-Za-z0-9\-]/', '', str_replace(' ', '-', $row_data["marca"])).'-'.Str::random(5);
                    $brand->meta_title = $row_data["marca"];
                    $brand->meta_description = $row_data["resumen"];
                    //$brand->sales_amount = "";
                    $brand->biografia = $row_data["biografia"];
                    $brand->banner = self::saveArchive($row_data["banner"]);
                    $brand->fundacion = $row_data["fundacion"];
                    $brand->ensamblado = $row_data["ensamblado"];
                    $brand->segmento1 = $row_data["segmento1"];
                    $brand->segmento2 = $row_data["segmento2"];
                    $brand->segmento3 = $row_data["segmento3"];
                    $brand->segmento4 = $row_data["segmento4"];
                    $brand->linea1 = $row_data["linea1"];
                    $brand->linea2 = $row_data["linea2"];
                    $brand->linea3 = $row_data["linea3"];
                    $brand->linea4 = $row_data["linea4"];
                    $brand->diseno = $row_data["diseno"];
                    $brand->resumen = $row_data["resumen"];
                    $brand->pais = $row_data["pais"];

                    $brand->save();
                }
            }
        } catch (Exception $e) {
            $error_code = $e->errorInfo[1];
            return back()->withErrors('There was a problem uploading the data!');
        }

        flash(translate('Products has been inserted successfully'))->success();
        return redirect()->route('brands.index');
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
}
