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
                'id' => htmlspecialchars_decode($content->id) ,
                'name' => htmlspecialchars_decode($content->name) ,
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

            //return filter_var($request->input('html_content'), FILTER_SANITIZE_SPECIAL_CHARS);
            $content->update([
                'html_content' => filter_var($request->input('html_content'), FILTER_SANITIZE_SPECIAL_CHARS),
                'original' => filter_var($request->input('original'), FILTER_SANITIZE_SPECIAL_CHARS)
            ]);

            return response('Vos modifications ont été enregistrées', 202);
        } catch (\Exception $e)
        {
            return response('Erreur de sauvegarde', 422);
        }
    }
}
