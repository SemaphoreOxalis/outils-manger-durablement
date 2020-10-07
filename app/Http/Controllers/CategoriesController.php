<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index');
    }

    public function index()
    {
        $categories = Category::all();

        return $categories;
    }

    public function update(Request $request, Category $category) {
        try
        {
            $request->validate([
                'name' => 'required|string|unique:categories,name',
            ]);
            $category->update(request(['name']));

            return response('Vos modifications ont été enregistrées', 202);
        } catch (\Exception $e)
        {
            return response('Erreur de sauvegarde', 422);
        }
    }

    public function store(Request $request) {
        try {
            $request->validate([
                'name' => 'required|string|unique:categories,name',
            ]);
            return Category::create(['name' => $request->name]);
        } catch (\Exception $e)
        {
            return response('Erreur de sauvegarde', 422);
        }
    }

    public function destroy(Category $category) {
        try
        {
            $category->delete();
            return response('La catégorie a bien été supprimée', 202);
        } catch (\Exception $e)
        {
            return response('Erreur', 422);
        }
    }
}
