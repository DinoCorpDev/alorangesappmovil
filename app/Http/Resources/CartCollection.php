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
                    'thumbnail' => api_asset($data->product->thumbnail_img),
                    'regular_price' => (float) $data->product->lowest_price,
                    'dicounted_price' => (float) $data->product->lowest_price,
                    'tax' => (float) $data->product->lowest_price,
                    'stock' => (int) $data->product->stock,
                    'min_qty' => (int) $data->product->min_qty,
                    'max_qty' => (int) $data->product->max_qty,
                    'standard_delivery_time' => (int) $data->product->standard_delivery_time,
                    'express_delivery_time' => (int) $data->product->express_delivery_time,
                    'qty' => (int) $data->quantity,
                    'brandName' => optional($data->product->brand)->getTranslation('name'),
                    'reference' => $data->product->reference,
                    'is_digital' => $data->product->digital
                ];
            })
        ];
        /*
        return [
            'data' => $this->collection->map(function($data) {
                return [
                    'cart_id' => (integer) $data->id,
                    'product_id' => (integer) $data->product_id,
                    'shop_id' => (integer) $data->product->shop_id,
                    'earn_point' => (float) $data->product->earn_point,
                    'variation_id' => (integer) $data->product_variation_id,
                    'name' => $data->product->name,
                    'combinations' => filter_variation_combinations($data->variation->combinations),
                    'thumbnail' => $data->variation->img ? api_asset($data->variation->img) : api_asset($data->product->thumbnail_img),
                    'regular_price' => (double) variation_price($data->product,$data->variation),
                    'dicounted_price' => (double) variation_discounted_price($data->product,$data->variation),
                    'tax' => (double) product_variation_tax($data->product,$data->variation),
                    'stock' => (integer) $data->variation->stock,
                    'min_qty' => (integer) $data->product->min_qty,
                    'max_qty' => (integer) $data->product->max_qty,
                    'standard_delivery_time' => (integer) $data->product->standard_delivery_time,
                    'express_delivery_time' => (integer) $data->product->express_delivery_time,
                    'qty' => (integer) $data->quantity,
                    'is_digital'=> $data->product->digital,
                ];
            })
        ];
        */
    }

    public function with($request)
    {
        return [
            'success' => true,
            'status' => 200
        ];
    }
}
