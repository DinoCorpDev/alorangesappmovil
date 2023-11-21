<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CartCollection extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'data' => $this->collection->map(function ($data) {
                return [
                    'cart_id' => (int) $data->id,
                    'product_id' => (int) $data->product_id,
                    'shop_id' => (int) $data->product->shop_id,
                    'earn_point' => (float) $data->product->earn_point,
                    'variation_id' => (int) $data->product_variation_id,
                    'name' => $data->product->name,
                    'brand' => [
                        'name' => optional($data->product->brand)->getTranslation('name'),
                        'slug' => optional($data->product->brand)->slug,
                    ],
                    'combinations' => filter_variation_combinations($data->variation->combinations),
                    'thumbnail' => $data->variation->img ? api_asset($data->variation->img) : api_asset($data->product->thumbnail_img),
                    'regular_price' => (float) variation_price($data->product, $data->variation),
                    'discounted_price' => (float) variation_discounted_price($data->product, $data->variation),
                    'tax' => (float) product_variation_tax($data->product, $data->variation),
                    'stock' => (int) $data->variation->stock,
                    'min_qty' => (int) $data->product->min_qty,
                    'max_qty' => (int) $data->product->max_qty,
                    'standard_delivery_time' => (int) $data->product->standard_delivery_time,
                    'express_delivery_time' => (int) $data->product->express_delivery_time,
                    'qty' => (int) $data->quantity,
                    'is_digital' => $data->product->digital,
                    'slug' => $data->product->slug,
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
