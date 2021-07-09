<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'unit_id', 'category_id', 'comment', 'emissionFactor', 'type'];
    protected $with = ['category', 'unit'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }

    public function recipes()
    {
        return $this->belongsToMany(Recipe::class)->withPivot('amount', 'price', 'origin');
    }

    public function scopeNormal($query)
    {
        return $query->where('type', 'prod');
    }

    public function scopeSpecial($query)
    {
        return $query->where('type', 'special');
    }
}
