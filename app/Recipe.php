<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Recipe extends Model
{
    use SoftDeletes;
    protected $fillable = ['name', 'description', 'author', 'guests'];
    protected $with = ['products'];

    public function products()
    {
        return $this->belongsToMany(Product::class)
            ->withPivot('amount', 'price', 'origin', 'index')
            ->orderBy('index', 'asc');
    }
}
