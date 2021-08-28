<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

class LogsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except(['log']);
    }

    public function index()
    {
        $filePath = storage_path("logs/log.log");
        $filePath2 = storage_path("logs/laravel.log");
        $logs = [];
        if (File::exists($filePath)) {
            $file = File::get($filePath);
            $logs[] = $file;
        }
        if (File::exists($filePath2)) {
            $file2 = File::get($filePath2);
            $logs[] = $file2;
        }

        return $logs;
    }

    public function log(Request $request)
    {
        try {
            $request->validate([
                'message' => 'required|string',
                'details' => 'nullable|array',
            ]);

            Log::channel('custom')->info($request->message, $request->details);
            return response('Action enregistrée', 200);
        } catch(\Exception $e) {
            Log::error('Erreur (Log.log)', ['error' => $e, 'request' => $request]);
            return response('Erreur de log', 422);
        }

    }
}
