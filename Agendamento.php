<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Agendamento extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'agendamento';
 
    protected $primaryKey = 'id_agendamento';


    protected $fillable = [
        "id_agendamento",
        "data",
        "hora",
        "nome_cliente",
        "nome_profissional",
    ];

    public function usuario()
    {
        return $this->hasMany(User::class,'id_agendamento', 'id_agendamento');
    }

}