<?php

namespace App\Http\Controllers;

use App\Origin;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class OriginsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index');
    }

    public function index()
    {
        $origins = Origin::all();

        return $origins;
    }

    public function update(Request $request, Origin $origin) {
        try
        {
            $request->validate([
                'from' => 'required|string|unique:origins,from,' . $origin->id,
                'distance' => 'required|numeric|min:1',
                'carbonImpact' => 'required|numeric|min:0.001',
                'carbonImpactPerKg' => 'required|numeric|min:0.001'
            ]);
            $origin->update(request(['from', 'distance', 'carbonImpact', 'carbonImpactPerKg']));

            return response('Vos modifications ont été enregistrées', 202);
        } catch (\Exception $e)
        {
            return response('Erreur de sauvegarde', 422);
        }
    }

    public function store(Request $request) {
        try {
            $request->validate([
                'from' => 'required|string|unique:origins',
                'distance' => 'required|numeric|min:1',
                'carbonImpact' => 'required|numeric|min:0.001',
                'carbonImpactPerKg' => 'required|numeric|min:0.001'
            ]);
            return Origin::create([
                'from' => $request->from,
                'distance' => $request->distance,
                'carbonImpact' => $request->carbonImpact,
                'carbonImpactPerKg' => $request->carbonImpactPerKg
            ]);
        } catch (\Exception $e)
        {
            return response('Erreur de sauvegarde', 422);
        }
    }

    public function destroy(Origin $origin) {
        try
        {
            $origin->delete();
            return response('L\'origine a bien été supprimée', 202);
        } catch (\Exception $e)
        {
            return response('Erreur', 422);
        }
    }
}
