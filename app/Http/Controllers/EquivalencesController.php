<?php

namespace App\Http\Controllers;

use App\Equivalence;
use Illuminate\Http\Request;

class EquivalencesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index');
    }

    public function index()
    {
        $equivalences = Equivalence ::all();

        return $equivalences;
    }

    public function update(Request $request, Equivalence $equivalence) {
        try
        {
            $request->validate([
                'name' => 'required|string|unique:equivalences,name,' . $equivalence->id,
                'rate' => 'required|numeric|min:0.001',
                'unit' => 'required|string',
                'source' => 'nullable|string'
            ]);
            $equivalence->update(request(['name', 'rate', 'unit', 'source']));

            return response('Vos modifications ont été enregistrées', 202);
        } catch (\Exception $e)
        {
            return response('Erreur de sauvegarde', 422);
        }
    }

    public function store(Request $request) {
        try {
            $request->validate([
                'name' => 'required|string|unique:equivalences',
                'rate' => 'required|numeric|min:0.001',
                'unit' => 'required|string',
                'source' => 'nullable|string'
            ]);
            return Equivalence ::create([
                'name' => $request->name,
                'rate' => $request->rate,
                'unit' => $request->unit,
                'source' => $request->source
            ]);
        } catch (\Exception $e)
        {
            return response('Erreur de sauvegarde', 422);
        }
    }

    public function destroy(Equivalence $equivalence) {
        try
        {
            $equivalence->delete();
            return response('L\'équivalence a bien été supprimée', 202);
        } catch (\Exception $e)
        {
            return response('Erreur', 422);
        }
    }
}
