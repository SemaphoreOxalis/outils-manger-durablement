<?php

namespace App\Http\Controllers;

use App\Content;
use Illuminate\Http\Request;

class ContentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index');
    }

    public function index()
    {
        $contents = Content::all();

        return $contents->map(function($content) {
            return [
                'id' => $content->id ,
                'name' => $content->name ,
                'html_content' => htmlspecialchars_decode($content->html_content) ,
                'original' => htmlspecialchars_decode($content->original)
            ];
        });
    }

    public function update(Request $request, Content $content) {
        try
        {
            $request->validate([
                'html_content' => 'required|string',
                'original' => 'required|string',
            ]);

            $content->update([
                'html_content' => htmlspecialchars($request->input('html_content'), ENT_QUOTES),
                'original' => htmlspecialchars($request->input('original'), ENT_QUOTES)
            ]);

            return response('Vos modifications ont été enregistrées', 202);
        } catch (\Exception $e)
        {
            return response('Erreur de sauvegarde', 422);
        }
    }

    public function getContent(String $name) {
        try
        {
            return Content::firstWhere('name', $name)->html_content;
        } catch (\Exception $e)
        {
            return response('Erreur', 404);
        }
    }
}
