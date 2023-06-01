<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\BrandCollection;
use App\Http\Resources\BrandSingleCollection;
use App\Models\Brand;

class BrandController extends Controller
{
    public function index()
    {
        return new BrandCollection(Brand::all());
    }

    public function show($brand_slug)
    {
        $brand = Brand::where('slug', $brand_slug)->first();

        if ($brand) {
            return new BrandSingleCollection($brand);
        } else {
            return response()->json([
                'success' => false,
                'data' => null,
                'message' => translate('Brand not found')
            ]);
        }
    }
}
