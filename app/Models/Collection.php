<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Collection extends Model
{
    protected $table = "collections";

    public function products()
    {
        return $this->hasMany(CollectionProduct::class);
    }

    public function productos()
    {
        return $this->hasMany(CollectionProduct::class, "id_collection");
    }
}
