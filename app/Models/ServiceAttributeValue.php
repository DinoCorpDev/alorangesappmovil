<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceAttributeValue extends Model
{
    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function attribute()
    {
        return $this->belongsTo(Attribute::class);
    }

    public function value()
    {
        return $this->belongsTo(AttributeValue::class);
    }
}
