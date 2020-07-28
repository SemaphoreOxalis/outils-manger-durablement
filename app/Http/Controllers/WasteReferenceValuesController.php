<?php

namespace App\Http\Controllers;

use App\WasteReferenceValue;
use Illuminate\Http\Request;

class WasteReferenceValuesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'update');
    }

    public function index()
    {
        return WasteReferenceValue::all();
    }

    public function update(Request $request, WasteReferenceValue $wasteReferenceValue)
    {
        $request->validate([
            'value' => 'required'
        ]);
        $wasteReferenceValue->update(request(['value']));
    }
}
