<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class WishlistServicesCollection extends ResourceCollection
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
                    'id' => (int) $data->service->id,
                    'reference' => $data->service->reference,
                    'name' => $data->service->name,
                    'photos' => $data->service->photos,
                    'thumbnail_img' => $data->service->thumbnail_img,
                    'description' => $data->service->description,
                    'lowest_price' => $data->service->lowest_price,
                    'highest_price' => $data->service->highest_price,
                    'discount' => api_asset($data->service->discount),
                    'discount_type' => $data->service->discount_type,
                    'discount_start_date' => $data->service->discount_start_date,
                    'discount_end_date  ' => $data->service->discount_end_date,
                    'currency' => $data->service->currency,
                    'published' => $data->service->published,
                    'unit' => $data->service->unit,
                    'min_qty' => $data->service->min_qty,
                    'max_qty' => $data->service->max_qty,
                    'tinyint' => $data->service->tinyint,
                    'has_warranty,' => $data->service->has_warranty,
                    'warranty_text,' => $data->service->warranty_text,
                    'tax,' => $data->service->tax,
                    'meta_title,' => $data->service->meta_title,
                    'meta_description,' => $data->service->meta_description,
                    'meta_description,' => $data->service->meta_description,
                    'meta_image,' => $data->service->meta_image,
                    'slug,' => $data->service->slug,
                    'rating,' => $data->service->rating
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
