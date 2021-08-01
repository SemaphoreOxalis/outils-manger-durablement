<?php

namespace App\Http\Controllers;

use App\Recipe;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class RecipesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except(['index', 'show', 'store', 'update', 'destroy']);
    }

    public function index()
    {
        return Recipe::orderBy('name')->get();
    }

    public function trashed()
    {
        return Recipe::onlyTrashed()->get();
    }

    public function restore($recipeId)
    {
        try {
            $recipe = Recipe::withTrashed()->find($recipeId);
            $recipe->restore();
            return response('La recette a bien été restaurée', 202);
        } catch(\Exception $e) {
            return response('Erreur de sauvegarde', 422);
        }
    }

    public function hardDelete($recipeId)
    {
        try {
            $recipe = Recipe::withTrashed()->find($recipeId);
            $recipe->forceDelete();
            return response('La recette a bien été supprimée définitivement', 202);
        } catch(\Exception $e) {
            return response('Erreur de sauvegarde', 422);
        }
    }

    public function show(Recipe $recipe)
    {
        return $recipe;
    }

    public function store(Request $request)
    {
        try {
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

            $recipe = new Recipe;
            $recipe->name = request('name');
            $recipe->description = request('description');
            $recipe->author = request('author');
            $recipe->save();

            $products = collect(request('products'))->mapWithKeys(function ($p) {
                return [$p['productId'] => [
                    'amount' => $p['pivot']['amount'],
                    'price' => $p['pivot']['price'],
                    'origin' => $p['pivot']['origin'],
                ]];
            });
            $recipe->products()->sync($products);

            return response('La recette "' . $recipe->name . '" a bien été créée', 202);
        } catch(\Exception $e) {
            return response('Erreur de sauvegarde', 422);
        }
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

            return response('La recette "' . $recipe->name . '" a bien été modifiée', 202);
        } catch (\Exception $e)
        {
            return response('Erreur de sauvegarde', 422);
        }
    }

    public function destroy(Recipe $recipe)
    {
        try {
            $name = $recipe->name;
            $recipe->delete();
            return response('La recette "' . $name . '" a bien été supprimée', 202);
        } catch(\Exception $e) {
            return response('Erreur de sauvegarde', 422);
        }
    }
}
