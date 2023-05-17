<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App;

class Service extends Model
{
    protected $guarded = [];

    protected $with = ['service_translations', 'taxes'];

    public function getTranslation($field = '', $lang = false)
    {
        $lang = $lang == false ? App::getLocale() : $lang;
        $service_translations = $this->service_translations->where('lang', $lang)->first();
        return $service_translations != null ? $service_translations->$field : $this->$field;
    }

    public function service_translations()
    {
        return $this->hasMany(ServiceTranslation::class);
    }

    public function service_categories()
    {
        return $this->hasMany(ServiceCategory::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'service_categories', 'service_id', 'category_id');
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class);
    }

    public function taxes()
    {
        return $this->hasMany(ServiceTax::class);
    }

    public function service_taxes()
    {
        return $this->belongsToMany(Tax::class, 'service_taxes', 'service_id', 'tax_id');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class)->where('status', 1);
    }

    public function reviews_5()
    {
        return $this->hasMany(Review::class)->where('status', 1)->where('rating', 5);
    }

    public function reviews_4()
    {
        return $this->hasMany(Review::class)->where('status', 1)->where('rating', 4);
    }

    public function reviews_3()
    {
        return $this->hasMany(Review::class)->where('status', 1)->where('rating', 3);
    }

    public function reviews_2()
    {
        return $this->hasMany(Review::class)->where('status', 1)->where('rating', 2);
    }

    public function reviews_1()
    {
        return $this->hasMany(Review::class)->where('status', 1)->where('rating', 1);
    }

    public function offers()
    {
        return $this->hasMany(OfferService::class);
    }
    public function wishlists()
    {
        return $this->hasMany(Wishlist::class);
    }
    public function carts()
    {
        return $this->hasMany(Cart::class);
    }

    public function attributes()
    {
        return $this->hasMany(ServiceAttribute::class);
    }

    public function attribute_values()
    {
        return $this->hasMany(ServiceAttributeValue::class);
    }

    public function variations()
    {
        return $this->hasMany(ServiceVariation::class);
    }
    public function variation_combinations()
    {
        return $this->hasMany(ServiceVariationCombination::class);
    }

    public function shop()
    {
        return $this->belongsTo(Shop::class);
    }
}
