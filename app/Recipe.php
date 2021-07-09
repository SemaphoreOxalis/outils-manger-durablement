<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $with = ['products'];

    public function products()
    {
        return $this->belongsToMany(Product::class)->withPivot('amount', 'price', 'origin');
    }
}
