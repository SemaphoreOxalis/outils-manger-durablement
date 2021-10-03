<?php

namespace App\Http\Controllers;

use App\IntroStep;
use Illuminate\Http\Request;

class IntroStepsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index');
    }

    public function index()
    {
        $steps = IntroStep::orderBy('index')->get();

        return $steps;
    }

    public function update(Request $request, IntroStep $step) {
        try
        {
            $request->validate([
                'title' => 'string|max:255|nullable',
                'text' => 'string|nullable',
                'element' => 'string|max:255|nullable',
                'position' => 'string|nullable',
                'index' => 'required|integer|min:0',
            ]);
            $step->update(request(['title', 'text', 'element', 'position', 'index']));

            return response('Vos modifications ont été enregistrées', 202);
        } catch (\Exception $e)
        {
            return $e;
            return response('Erreur de sauvegarde', 422);
        }
    }

    public function store(Request $request) {
        try {
            $request->validate([
                'title' => 'string|max:255|nullable',
                'text' => 'string|nullable',
                'element' => 'string|max:255|nullable',
                'position' => 'string|nullable',
                'index' => 'required|integer|min:0',
            ]);
            return IntroStep ::create([
                'title' => $request->title,
                'text' => $request->text,
                'element' => $request->element,
                'position' => $request->position,
                'index' => $request->index
            ]);
        } catch (\Exception $e)
        {
            return response('Erreur de sauvegarde', 422);
        }
    }

    public function destroy(IntroStep $step) {
        try
        {
            $step->delete();
            return response('L\'étape a bien été supprimée', 202);
        } catch (\Exception $e)
        {
            return response('Erreur', 422);
        }
    }
}
