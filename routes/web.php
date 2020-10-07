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


// ROUTES BACK-END

// Endpoints pour notre API
// Outil Gaspi
Route::get('/api/waste-values', 'WasteReferenceValuesController@index');
Route::patch('/api/waste-values/{wasteReferenceValue}', 'WasteReferenceValuesController@update');
// Outil Carbone
Route::get('/api/products', 'ProductsController@index');
Route::get('/api/origins', 'OriginsController@index');
Route::get('/api/categories', 'CategoriesController@index');
Route::patch('/api/categories/{category}', 'CategoriesController@update');
Route::post('/api/categories', 'CategoriesController@store');
Route::delete('/api/categories/{category}', 'CategoriesController@destroy');

// Compteurs
Route::get('/api/counters', 'CountersController@index');
Route::patch('/api/counters/{counter}', 'CountersController@update');
Route::patch('/api/counters/{counter}/increment', 'CountersController@increment');

Route::post('/export', 'ExportController@export');


// Commentez la première ligne et décommentez la 2e pour qu'il ne soit plus possible de s'enregistrer
// ATTENTION :  tout utilisateur enregistré dispose des droits d'administrateur et peux donc accéder aux pages admin
//Auth::routes();
Auth::routes(['register' => false]);



// ROUTES FRONT-END

// /{any?} car on ne veut pas que ce soit Laravel qui s'occupe de répondre aux URLS de la SPA
// On veut que ce soit géré en front-end par Vue
Route::get('/{any?}', function () {
    return view('app');
})->where('any', '.*');



