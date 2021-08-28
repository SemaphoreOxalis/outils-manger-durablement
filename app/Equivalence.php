<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Equivalence extends Model
{
    protected $fillable = ['name', 'rate', 'unit', 'source'];
}
