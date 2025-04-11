<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ServicoController;
use App\Http\Controllers\AgendamentoController;
use App\Http\Controllers\AgendaController;



Route::get('usuarios', [UserController::class, 'getusuarios']);
Route::get('servicos', [ServicoController::class, 'getservicos']);
Route::get('agenda', [AgendaController::class, 'getagenda']);
Route::get('agendamento', [AgendamentoController::class, 'getagendamento']);