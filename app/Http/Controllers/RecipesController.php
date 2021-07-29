<?php

namespace App\Http\Controllers;

use App\Recipe;
use Illuminate\Http\Request;

class RecipesController extends Controller
{
    public function index()
    {
        return Recipe::all();
    }

    public function show(Recipe $recipe)
    {
        return $recipe;
    }

    public function update(Request $request, Recipe $recipe)
    {
        try
        {
            $request->validate([
                'name' => 'required|string',
                'description' => 'nullable|string',
                'author' => 'nullable|string',
                'products' => 'required|array',
                'products.*.productId' => 'required|numeric',
                'products.*.pivot.amount' => 'required|numeric',
                'products.*.pivot.price' => 'required|numeric',
                'products.*.pivot.origin' => 'required|string',
            ]);
            $products = collect(request('products'))->mapWithKeys(function ($p) {
                return [$p['productId'] => [
                    'amount' => $p['pivot']['amount'],
                    'price' => $p['pivot']['price'],
                    'origin' => $p['pivot']['origin'],
                ]];
            });
            $recipe->update(request(['name', 'description', 'author']));
            $recipe->products()->sync($products);

            return response('Vos modifications ont été enregistrées', 202);
        } catch (\Exception $e)
        {
            return response('Erreur de sauvegarde', 422);
        }
    }
}
