<?php

namespace App\Http\Controllers;


use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class AgendaController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getagenda(){

        $agenda =  
        [
            ["id" => "1", "nome_profissional" => "Rafaela Cruz", "horario" => "12:00"],
            ["id" => "2", "nome_profissional" => "Filipe Robert", "horario" => "14:00"],
            ["id" => "3", "nome_profissional" => "Enzo Silva", "horario" => "16:00"],
            ["id" => "4", "nome_profissional" => "Neymar Junior", "horario" => "18;00"],
            ["id" => "5", "nome_profissional" => "Pelé", "horario" => "13:00"],
            ["id" => "6", "nome_profissional" => "Chave Racha Arajá", "horario" => "15:00"],
            ["id" => "7", "nome_profissional" => "Nicolas Coutinho", "horario" => "17:00"],
            ["id" => "8", "nome_profissional" => "Abdnego Cruz", "horario" => "19:00"],
            ["id" => "9", "nome_profissional" => "Larissa Santos", "horario" => "20:00"],
            ["id" => "10", "nome_profissional" =>"Alan Jeon", "horario" => "21:00"],

        ];

    

    return response()->json($agenda);
}
}
