<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserCollection extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'balance' => $this->balance,
            'name' => $this->first_name . ' ' . $this->first_lastname,
            'firstName' => $this->first_name,
            'secondName' => $this->second_name,
            'firstLastname' => $this->first_lastname,
            'secondLastname' => $this->second_lastname,
            'email' => $this->email,
            'phone' => $this->phone,
            'avatar' => $this->avatar ? api_asset($this->avatar) : '',
            'registerSince' => $this->created_at,
            'personType' => $this->person_type,
            'documentType' => $this->document_type,
            'documentNumber' => $this->document_number,
            'policiesAndCookiesConsent' => $this->policies_and_cookies_consent,
            'offersConsent' => $this->offers_consent,
        ];
    }
}
