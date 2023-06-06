<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CollectionOrderDetail extends Model
{   

    protected $guarded = [];
    
    //use HasFactory;
    protected $table = "collection_order_detail";

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function collection()
    {
        return $this->belongsTo(Collection::class, 'collection_id');
    }

}
