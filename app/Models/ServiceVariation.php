<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceVariation extends Model
{
    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }

    public function combinations()
    {
        return $this->hasMany(ServiceVariationCombination::class);
    }
}
