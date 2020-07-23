<?php

namespace App\Http\Controllers;

use App\Product;
use App\WasteReferenceValue;

class TestController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $values = Product::all();

        // dd($values);
        return view('admin.adminPanel', ['values' => $values]);
    }

    public function show()
    {

    }
}
