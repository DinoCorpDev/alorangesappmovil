<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CollectionProduct extends Model
{
    protected $table = "collections_products";

    public function product()
    {
        return $this->belongsTo(Product::class, 'id_product');
    }
}
