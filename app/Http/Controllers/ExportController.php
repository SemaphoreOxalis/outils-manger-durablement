<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExportController extends Controller
{
    public function export(Request $request)
    {
        return response()->json($request->all());
    }
}
