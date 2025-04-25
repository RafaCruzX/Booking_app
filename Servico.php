<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Servico extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'servico';
 
    protected $primaryKey = 'id_servico';


    protected $fillable = [
        "nome_servico",
    ];

    public function usuario()
    {
        return $this->hasMany(User::class,'id_servico', 'id_servico');
    }

}