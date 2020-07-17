<?php

namespace App\Http\Controllers;

use App\Product;

class HomeController extends Controller
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
        $products = Product::all()->load('category')->load('unit');

        // dd(json_decode($data));

        return view('test', compact('products'));
    }
}
