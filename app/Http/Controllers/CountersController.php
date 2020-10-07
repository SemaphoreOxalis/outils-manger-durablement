<?php

namespace App\Http\Controllers;

use App\Counter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CountersController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index');
    }

    public function index()
    {
        return Counter::all();
    }

    public function update(Request $request, Counter $counter)
    {
        try
        {
            $request->validate([
                'value' => 'required|numeric',
            ]);
            $counter->update(request(['value']));

            return response('Vos modifications ont été enregistrées', 202);
        } catch (\Exception $e)
        {
            return response('Erreur de sauvegarde', 422);
        }
    }

    public function increment(Request $request, Counter $counter) {
        try
        {
            DB::table('counters')->where('id', $counter->id)->increment('value');

            return response('Le compteur a bien été incrémenté', 202);
        } catch (\Exception $e)
        {
            return response('Erreur d\'incrémentation du compteur', 422);
        }
    }
}
