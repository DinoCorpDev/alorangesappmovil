<?php

namespace App\Http\Services;

use Exception;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;

class AlegraServices{
    private $client;
    private $exclude = [13, 14, 18, 44, 52, 56, 57, 64, 65, 70, 80, 86, 88, 97, 101, 120, 135, 139, 141, 150, 152, 153, 154, 155, 147, 148, 149, 151];// [147, 148, 149, 151]
    private $options;

    public function __construct(){
        $this->client = new Client(['verify' => false ]);
        $this->options = [
                'headers' => [
                'accept' => 'application/json',
                'authorization' => 'Basic YWxvcmFuZ2Vjb3Jwb3JhdGlvbkBnbWFpbC5jb206ZDQzNmJjZWJhM2Q5YTVlNjdkZjc=',
            ],
        ];
    }

    public function getCategories(){
        $filteredResponse = [];
        $start = 0;
        while(true){
            $responseService = $this->client->request('GET', 'https://api.alegra.com/api/v1/item-categories?start='.$start, $this->options);
            $response = json_decode($responseService->getBody(), true);

            if(empty($response)){
                break;
            }

            $filteredResponse = array_merge($filteredResponse, array_filter($response, function ($object) {
                return !in_array($object['id'], $this->exclude);
            }));

            $start += 20;
        }

        return $filteredResponse;
    }

    public function getAllProducts(){
        $response = $this->client->request('GET', 'https://api.alegra.com/api/v1/items', $this->options);
        return "";
    }

    public function getProductsByCategory($idCategory){
        $start = 0;
        $filteredResponse = [];
        while(true){
            try{
                $responseService = $this->client->request('GET', 'https://api.alegra.com/api/v1/items?start='.$start.'&idItemCategory='.$idCategory, $this->options);

                $headersResponse = $responseService->getHeaders();

                $response = json_decode($responseService->getBody(), true);

                if(empty($response)){
                    break;
                }

                $filteredResponse = array_merge($filteredResponse, $response);

                $start += 15;

            }catch(Exception $e){
                sleep(2);
            }
        }

        return $filteredResponse;
    }

    public function getProductsByQuery($query){
        $filteredResponse = [];

        try{
            $responseService = $this->client->request('GET', 'https://api.alegra.com/api/v1/items?query='.$query, $this->options);

            $headersResponse = $responseService->getHeaders();

            $response = json_decode($responseService->getBody(), true);

            if(empty($response)){
                return null;
            }

            $filteredResponse = array_merge($filteredResponse, array_filter($response, function ($object) {
                return !in_array($object['itemCategory']['id'], $this->exclude);
            }));

        }catch(Exception $e){
        }

        return $filteredResponse;
    }
}