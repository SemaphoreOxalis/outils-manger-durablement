<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/api/products', 'ProductsController@index');
Route::get('/api/origins', 'OriginsController@index');
Route::get('/api/categories', 'CategoriesController@index');

Route::get('/api/waste-values', 'WasteReferenceValuesController@index');
Route::patch('/api/waste-values/{wasteReferenceValue}', 'WasteReferenceValuesController@update');

Auth::routes();
//Auth::routes(['register' => false]);


Route::get('/{any?}', function () {
    return view('app');
})->where('any', '.*');



