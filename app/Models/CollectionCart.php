<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CollectionCart extends Model
{   

    protected $table = "collection_cart";

    protected $fillable = [
        'user_id', 'temp_user_id', 'collection_id', 'quantity',
    ];

	public function collection()
    {
        return $this->belongsTo(Collection::class);
    }
}
