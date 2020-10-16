<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index');
    }

    public function index()
    {
        $products = Product::all();

        return $products;
    }

    public function update(Request $request, Product $product) {
        try
        {
            $request->validate([
                'name' => 'required|string',
                'unit_id' => 'required|integer|exists:units,id',
                'category_id' => 'required|integer|exists:categories,id',
                'comment' => 'string|nullable',
                'emissionFactor' => 'numeric|min:0'
            ]);
            $product->update(request(['name', 'unit_id', 'category_id', 'comment', 'emissionFactor']));

            return response('Vos modifications ont été enregistrées', 202);
        } catch (\Exception $e)
        {
            return response('Erreur de sauvegarde', 422);
        }
    }

    public function store(Request $request) {
        try {
            $request->validate([
                'name' => 'required|string',
                'unit_id' => 'required|integer|exists:units,id',
                'category_id' => 'required|integer|exists:categories,id',
                'comment' => 'string|nullable',
                'emissionFactor' => 'numeric|min:0'
            ]);
            return Product::create([
                'name' => $request->name,
                'unit_id' => $request->unit_id,
                'category_id' => $request->category_id,
                'comment' => $request->comment,
                'emissionFactor' => $request->emissionFactor
            ]);
        } catch (\Exception $e)
        {
            return response('Erreur de sauvegarde', 422);
        }
    }

    public function destroy(Product $product) {
        try
        {
            $product->delete();
            return response('Le produit a bien été supprimée', 202);
        } catch (\Exception $e)
        {
            return response('Erreur', 422);
        }
    }

}
