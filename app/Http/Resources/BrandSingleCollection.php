<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BrandSingleCollection extends JsonResource
{
    public function toArray($request)
    {
        $brandArray = [
            'id' => (int) $this->id,
            'slug' => $this->slug,
            'name' => $this->getTranslation('name'),
            'logo' => api_asset($this->logo),
            'resumen' => $this->resumen,
            'biografia' => $this->biografia,
        ];

        return $brandArray;
    }

    public function with($request)
    {
        return [
            'success' => true,
            'status' => 200
        ];
    }
}
