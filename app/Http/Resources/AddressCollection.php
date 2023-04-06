<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class AddressCollection extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'data' => $this->collection->map(function ($data) {
                return [
                    'id'      => $data->id,
                    'user_id' => $data->user_id,
                    'address' => $data->address,
                    'name' => $data->name,
                    'details' => $data->details,
                    'country' => $data->country,
                    'state' => $data->state,
                    'city' => $data->city,
                    'neighborhood' => $data->neighborhood,
                    'postal_code' => $data->postal_code,
                    'phone' => $data->phone,
                    'default_shipping' => $data->default_shipping,
                    'default_billing' => $data->default_billing,
                    'default_service' => $data->default_service
                ];
            })
        ];
    }

    public function with($request)
    {
        return [
            'success' => true,
            'status' => 200
        ];
    }
}
