<?php

namespace App\Http\Controllers;

use App\WasteReferenceValue;
use Illuminate\Http\Request;

class WasteReferenceValuesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index');
    }

    public function index()
    {
        return WasteReferenceValue::all();
    }

    public function update(Request $request, WasteReferenceValue $wasteReferenceValue)
    {
        //
    }
}