<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class AgendamentoController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getagendamento(){

        $agendamento =  

        [
            ["id_agendamento" => "1", "data" => "10/04/2025", "hora" => "18:00", "nome_cliente" => "Vinicius Luiz", "nome_profissional" => "VL"],
            ["id_agendamento" => "2", "data" => "15/10/2025", "hora" => "14:30", "nome_cliente" => "Antonela Braga", "nome_profissional" => "Braga"],
            ["id_agendamento" => "3", "data" => "25/05/2025", "hora" => "14:30", "nome_cliente" => "Sheila Santos", "nome_profissional" => "Shei"],
            ["id_agendamento" => "4", "data" => "03/07/2025", "hora" => "14:00", "nome_cliente" => "Vitor Carlos", "nome_profissional" => "Vitin"],
            ["id_agendamento" => "5", "data" => "02/08/2025", "hora" => "15:30", "nome_cliente" => "André Gomes", "nome_profissional" => "Gomes"],
            ["id_agendamento" => "6", "data" => "31/05/2025", "hora" => "11:30", "nome_cliente" => "Luccas Luco", "nome_profissional" => "Loco"],
            ["id_agendamento" => "7", "data" => "20/06/2025", "hora" => "10 =>00", "nome_cliente" => "Moises Carmo", "nome_profissional"=> "Jonhy Mark"],
            ["id_agendamento" => "8", "data" => "31/05/2025", "hora" =>"08:00", "nome_cliente"  =>"Hudson Menezes", "nome_profissional"=> "Jonhy Mark"],
        ];

    return response()->json($agendamento);
}
}
