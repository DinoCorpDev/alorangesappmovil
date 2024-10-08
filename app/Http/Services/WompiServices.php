<?php

namespace App\Http\Services;

use Exception;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;

class WompiServices{
    private $client;
    private $options;

    public function __construct(){
        $this->client = new Client(['verify' => false ]);
        $this->options = [
            'headers' => [
                'accept' => 'application/json',
            ],
        ];
        
        /**
         * Llaves y link de prueba
         */
        /*
            $this->url = 'https://sandbox.wompi.co/v1/';
            $this->token_pub_key = 'pub_test_0HFZFgu0zGNrczp6mTp0vtuuosqQjf8l';
            $this->token_priv_key = 'prv_test_lURl0xnvDWs03TC7lnExxbMdG3omewow';
        */

        /**
         * Llaves y link de producción
         */

        $this->url = 'https://production.wompi.co/v1/';
        $this->token_pub_key = 'pub_prod_yPmmrawVOXbJ6osBjdD95FHFTGFVayP9';
        $this->token_priv_key = 'prv_prod_1CLeQcqw6UpkhPjKlCcEVOsu6C4dZL8q';

        $this->postHeaders = [
            'accept' => '/',
            'Authorization'=> 'Bearer '.$this->token_pub_key,
            'Content-Type' => 'application/json',
        ];

        $this->postPrivateHeaders = [
            'accept' => '/',
            'Authorization'=> 'Bearer '.$this->token_priv_key,
            'Content-Type' => 'application/json',
        ];
    }

    public function getAceptanceToken(){
        $responseService = $this->client->request('GET', $this->url.'merchants/'.$this->token_pub_key, $this->options);
        $response = json_decode($responseService->getBody(), true);
        foreach ($response as $key => $res) {
            if (isset($res['presigned_acceptance'])) {
                $data = [
                    'presigned_acceptance' => $res['presigned_acceptance'],
                ];
                return $data;
            }
        }
    }

    public function tokenizeCard($cardData){
        try {
            $response = $this->client->request('POST', $this->url.'tokens/cards', [
                'headers' => $this->postHeaders,
                'json' => $cardData
            ]);

            $res = json_decode($response->getBody()->getContents(), true);;

            return $res;
        } catch (\Exception $e) {
            // Manejar el error
            echo 'Error: ' . $e->getMessage();
        }

        return $res;
    }

    public function wompiTransaction($paymentInformation){
        try {
            $response = $this->client->request('POST', $this->url.'transactions', [
                'headers' => $this->postHeaders,
                'json' => $paymentInformation
            ]);

            $res = json_decode($response->getBody()->getContents(), true);

            return $res;
        } catch (\Exception $e) {
            // Manejar el error
            return $e->getMessage();
        }
    }

    public function wompiGetTransaction($id_transaction){
        try {
            $response = $this->client->request('GET', $this->url.'transactions/'.$id_transaction, [
                'headers' => $this->options
            ]);

            $res = json_decode($response->getBody()->getContents(), true);

            return $res;
        } catch (\Exception $e) {
            // Manejar el error
            return $e->getMessage();
        }
    }

    public function wompiPSEPayments(){
        try {
            $response = $this->client->request('GET', $this->url.'pse/financial_institutions', [
                'headers' => $this->postHeaders
            ]);

            $res = json_decode($response->getBody()->getContents(), true);

            return $res;
        } catch (\Exception $e) {
            // Manejar el error
            return $e->getMessage();
        }
    }

    public function wompiGetResultTransaction($id){
        try {
            $response = $this->client->request('GET', $this->url.'transactions/'.$id, [
                'headers' => $this->postHeaders
            ]);

            $res = json_decode($response->getBody()->getContents(), true);
            
            return $res;
        } catch (\Exception $e) {
            // Manejar el error
            return $e->getMessage();
        }   
    }

    public function wompiGetTransactionFacturas($reference){
        try {
            $response = $this->client->request('GET', $this->url.'transactions?reference='.$reference, [
                'headers' => $this->postPrivateHeaders
            ]);

            $res = json_decode($response->getBody()->getContents(), true);
            
            return $res;
        } catch (\Exception $e) {
            // Manejar el error
            return $e->getMessage();
        }
    }
}