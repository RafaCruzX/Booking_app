<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class ServicoController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getservicos(){

        $servico =  
        [
            ["id_servico" => "1", "nome_servico" => "Limpeza"],
            ["id_servico" => "2", "nome_servico" => "Clareamento dental"],
            ["id_servico" => "3", "nome_servico" => "Implante dentario"],
            ["id_servico" => "4", "nome_servico" => "Tratamento Canala"],
            ["id_servico" => "5", "nome_servico" => "Extração dentaria"],
            ["id_servico" => "6", "nome_servico" => "Aparelho ortodôntico"],
        ];
        

    return response()->json($servico);
}
}
