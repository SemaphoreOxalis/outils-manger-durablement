<?php

namespace App\Http\Controllers;

use App\Unit;
use Illuminate\Http\Request;

class UnitsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index');
    }

    public function index()
    {
        $units = Unit::all();

        return $units;
    }

    public function update(Request $request, Unit $unit) {
        try
        {
            $request->validate([
                'unit' => 'required|string|unique:units,unit,' . $unit->id,
                'shortUnit' => 'required|string'
            ]);
            $unit->update(request(['unit', 'shortUnit']));

            return response('Vos modifications ont été enregistrées', 202);
        } catch (\Exception $e)
        {
            return response($e, 422);
        }
    }

    public function store(Request $request) {
        try {
            $request->validate([
                'unit' => 'required|string|unique:units',
                'shortUnit' => 'required|string'
            ]);
            return Unit::create([
                'unit' => $request->unit,
                'shortUnit' => $request->shortUnit
            ]);
        } catch (\Exception $e)
        {
            return response($e, 422);
        }
    }

    public function destroy(Unit $unit) {
        try
        {
            $unit->delete();
            return response('L\'unité a bien été supprimée', 202);
        } catch (\Exception $e)
        {
            return response('Erreur', 422);
        }
    }
}
