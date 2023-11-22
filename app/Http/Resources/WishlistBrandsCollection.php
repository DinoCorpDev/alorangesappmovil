<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class WishlistBrandsCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection->map(function ($data) {
                return [
                    'id' => (int) $data->brand->id,
                    'name' => $data->brand->name,
                    'logo' => $data->brand->logo,
                    'slug' => $data->brand->slug,
                    'meta_title' => $data->brand->meta_title,
                    'meta_description' => $data->brand->meta_description,
                    'sales_amount' => $data->brand->sales_amount,
                    'biografia' => $data->brand->biografia,
                    'banner' => api_asset($data->brand->banner),
                    'fundacion' => $data->brand->fundacion,
                    'ensamblado' => $data->brand->ensamblado,
                    'diseno' => $data->brand->diseno,
                    'resumen' => $data->brand->resumen,
                    'pais' => $data->brand->pais
                ];
            })
        ];
    }

    public function with($request)
    {
        return [
            'success' => true,
            'status' => 200
        ];
    }
}
