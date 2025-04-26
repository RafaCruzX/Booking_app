<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Agenda extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'agenda';
 
    protected $primaryKey = 'id_agenda';


    protected $fillable = [
        "id_agenda",
        "id_usuario",
        "dia_da_semana",
        "horario",
    ];

    public function usuario()
    {
        return $this->hasMany(User::class,'id_agenda', 'id_agenda');
    }

}