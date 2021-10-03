<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class IntroStep extends Model
{
    protected $fillable = ['title', 'text', 'element', 'position', 'index'];
}
