<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Origin extends Model
{
    protected $fillable = ['from', 'distance', 'carbonImpact', 'carbonImpactPerKg'];
}
