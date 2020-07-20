<?php

namespace App\Http\Controllers;

use App\Product;

class TestController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('admin.adminPanel');
    }

    public function show()
    {
        $products = Product::all();

        // dd(json_decode($products));

        return $products;

        return view('test', compact('products'));
    }
}
