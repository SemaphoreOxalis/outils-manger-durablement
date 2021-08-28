<?php

namespace App\Http\Controllers;

use App\Recipe;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

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
            Log::channel('custom')->info('Recette restaurée', ['recipe' => $recipe]);
            return response('La recette a bien été restaurée', 202);
        } catch(\Exception $e) {
            Log::error('Erreur (recipes.restore)', ['error' => $e, 'id' => $recipeId]);
            return response('Erreur de sauvegarde', 422);
        }
    }

    public function hardDelete($recipeId)
    {
        try {
            $recipe = Recipe::withTrashed()->find($recipeId);
            Log::channel('custom')->notice('Recette supprimée définitivement', ['recipe' => $recipe]);
            $recipe->forceDelete();
            return response('La recette a bien été supprimée définitivement', 202);
        } catch(\Exception $e) {
            Log::error('Erreur (recipes.hardDelete)', ['error' => $e, 'id' => $recipeId]);
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
                'products.*.pivot.index' => 'required|numeric',
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
                    'index' => $p['pivot']['index'],
                ]];
            });
            $recipe->products()->sync($products);

            Log::channel('custom')->info('Recette créée', ['recipe' => $recipe]);

            return $recipe->id;
        } catch(\Exception $e) {
            Log::error('Erreur (recipes.store)', ['error' => $e, 'request' => $request]);
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
                'products.*.pivot.index' => 'required|numeric',
            ]);
            $products = collect(request('products'))->mapWithKeys(function ($p) {
                return [$p['productId'] => [
                    'amount' => $p['pivot']['amount'],
                    'price' => $p['pivot']['price'],
                    'origin' => $p['pivot']['origin'],
                    'index' => $p['pivot']['index'],
                ]];
            });
            $recipe->update(request(['name', 'description', 'author']));
            $recipe->products()->sync($products);

            Log::channel('custom')->info('Recette modifiée', ['recipe' => $recipe]);

            return response('La recette "' . $recipe->name . '" a bien été modifiée', 202);
        } catch (\Exception $e)
        {
            Log::error('Erreur (recipes.update)', ['error' => $e, 'request' => $request, 'recipe' =>$recipe]);
            return response('Erreur de sauvegarde', 422);
        }
    }

    public function destroy(Recipe $recipe)
    {
        try {
            $name = $recipe->name;
            Log::channel('custom')->info('Recette supprimée', ['recipe' => $recipe]);
            $recipe->delete();
            return response('La recette "' . $name . '" a bien été supprimée', 202);
        } catch(\Exception $e) {
            Log::error('Erreur (recipes.destroy)', ['error' => $e, 'recipe' => $recipe]);
            return response('Erreur de sauvegarde', 422);
        }
    }
}
