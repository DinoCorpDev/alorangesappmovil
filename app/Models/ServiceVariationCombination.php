<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceVariationCombination extends Model
{

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
    public function attribute()
    {
        return $this->belongsTo(Attribute::class);
    }
    public function attribute_value()
    {
        return $this->belongsTo(AttributeValue::class);
    }
    public function variation()
    {
        return $this->belongsTo(ServiceVariation::class, 'service_variation_id');
    }
}
