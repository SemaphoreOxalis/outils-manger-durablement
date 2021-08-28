<?php

namespace App\Http\Controllers;

use App\Content;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ContentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'getContent');
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
            $oldContent = $content;

            $content->update([
                'html_content' => htmlspecialchars($request->input('html_content'), ENT_QUOTES),
                'original' => htmlspecialchars($request->input('original'), ENT_QUOTES)
            ]);
            Log::channel('custom')->info('Contenu modifié', ['oldContent' => $oldContent, 'newContent' => $content]);

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

    public function uploadImg(Request $request) {
        $validation = $request->validate([
            'file' => 'required|image'
        ]);
        $actualFile = $validation['file'];
        $fileName = $actualFile->getClientOriginalName();
        $path = $request->file('file')->storeAs('images', $fileName, 'public');
        return response()->json(['location' => "/storage/$path"]);
    }

    public function getImages() {
        $images = Storage::disk('public')->files('images');

        return collect($images)->map(function($image) {
            return [
                'img' => $image ,
                'link' => '<img src="/storage/' . $image . '" alt="">' ,
            ];
        });
    }
}

