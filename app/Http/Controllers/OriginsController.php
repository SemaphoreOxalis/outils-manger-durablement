<?php

namespace App\Http\Controllers;

use App\Origin;
use Illuminate\Http\Request;

class OriginsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index');
    }

    public function index()
    {
        $origins = Origin::all();

        return $origins;
    }
}
