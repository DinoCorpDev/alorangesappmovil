<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Category;
use App\Models\ProductCategory;

class ProductSingleCollection extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $productCategories = ProductCategory::where('product_id',$this->id)->first();
        $category = Category::where('id',$productCategories->category_id)->first();

        $images=[];
        array_push($images, [
            'src' => $this->thumbnail_img,
            'type' => 'image']);
        return [
            'id' => (int) $this->id,
            'name' => $this->getTranslation('name'),
            'slug' => $this->slug,
            'metaTitle' => $this->meta_title,
            'category_name' => $category->name,
            'tax' => $this->tax,
            'brand' => [
                'id' => optional($this->brand)->id,
                'name' => optional($this->brand)->getTranslation('name'),
                'slug' => optional($this->brand)->slug,
                'logo' => api_asset(optional($this->brand)->logo),
            ],
            'photos' => $this->convertPhotos($this),
            'thumbnail_image' => api_asset($this->thumbnail_img),
            'images' => $images,
            'tags' => explode(',', $this->tags),
            'featured' => (int) $this->featured,
            'stock' => (int) $this->stock,
            'min_qty' => (int) $this->min_qty,
            'max_qty' => (int) $this->max_qty,
            'unit' => $this->getTranslation('unit'),
            'discount' => $this->discount,
            'discount_type' => $this->discount_type,
            'base_price' => (float) product_base_price($this),
            'highest_price' => (float) product_highest_price($this),
            'base_discounted_price' => (float) product_discounted_base_price($this),
            'highest_discounted_price' => (float) product_discounted_highest_price($this),
            'standard_delivery_time' => (int) $this->standard_delivery_time,
            'express_delivery_time' => (int) $this->express_delivery_time,
            'is_variant' => $this->is_variant,
            'has_warranty' => $this->has_warranty,
            'review_summary' => [
                'average' => (float) $this->rating,
                'total_count' => (int) $this->reviews_count,
                'count_5' => (int) $this->reviews_5_count,
                'count_4' => (int) $this->reviews_4_count,
                'count_3' => (int) $this->reviews_3_count,
                'count_2' => (int) $this->reviews_2_count,
                'count_1' => (int) $this->reviews_1_count,
            ],
            'description' => $this->description,
            'variations' => filter_product_variations($this->variations, $this),
            'variation_options' => generate_variation_options($this->variation_combinations),
            'shop' => [
                'name' => $this->shop->name,
                'logo' => api_asset($this->shop->logo),
                'rating' => (float) $this->shop->rating,
                'review_count' => $this->shop->reviews_count,
                'slug' => $this->shop->slug,
            ],
            'earn_point' => (float) $this->earn_point,
            'is_digital' => $this->digital == 1 ? true : false,
        ];
    }

    public function with($request)
    {
        return [
            'success' => true,
            'status' => 200
        ];
    }

    protected function convertPhotos()
    {
        $result = array();

        foreach (explode(',', $this->photos) as $item) {
            array_push($result, api_asset_new($item));
        }

        return $result;
    }
}
