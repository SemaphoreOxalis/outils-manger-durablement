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
Route::get('/api/categories', 'CategoriesController@index');
Route::patch('/api/categories/{category}', 'CategoriesController@update');
Route::post('/api/categories', 'CategoriesController@store');
Route::delete('/api/categories/{category}', 'CategoriesController@destroy');

Route::get('/api/units', 'UnitsController@index');
Route::patch('/api/units/{unit}', 'UnitsController@update');
Route::post('/api/units', 'UnitsController@store');
Route::delete('/api/units/{unit}', 'UnitsController@destroy');

Route::get('/api/products', 'ProductsController@index');
Route::get('/api/special-products', 'ProductsController@getSpecialProducts');
Route::patch('/api/products/{product}', 'ProductsController@update');
Route::post('/api/products', 'ProductsController@store');
Route::delete('/api/products/{product}', 'ProductsController@destroy');

Route::get('/api/origins', 'OriginsController@index');
Route::patch('/api/origins/{origin}', 'OriginsController@update');
Route::post('/api/origins', 'OriginsController@store');
Route::delete('/api/origins/{origin}', 'OriginsController@destroy');

Route::get('/api/equivalences', 'EquivalencesController@index');
Route::patch('/api/equivalences/{equivalence}', 'EquivalencesController@update');
Route::post('/api/equivalences', 'EquivalencesController@store');
Route::delete('/api/equivalences/{equivalence}', 'EquivalencesController@destroy');

Route::get('/api/steps', 'IntroStepsController@index');
Route::patch('/api/steps/{step}', 'IntroStepsController@update');
Route::post('/api/steps', 'IntroStepsController@store');
Route::delete('/api/steps/{step}', 'IntroStepsController@destroy');

Route::get('/api/recipes', 'RecipesController@index');
Route::get('/api/recipes/count', 'RecipesController@count');
Route::get('/api/recipes/{recipe}', 'RecipesController@show');
Route::patch('/api/recipes/{recipe}', 'RecipesController@update');
Route::post('/api/recipes', 'RecipesController@store');
Route::delete('/api/recipes/{recipe}', 'RecipesController@destroy');
Route::get('/api/trashed-recipes', 'RecipesController@trashed');
Route::get('/api/trashed-recipes/{recipe}/restore', 'RecipesController@restore');
Route::delete('/api/trashed-recipes/{recipe}/delete', 'RecipesController@hardDelete');

// Logs
Route::get('/api/logs', 'LogsController@index');
Route::post('/api/logs', 'LogsController@log');

// Compteurs
Route::get('/api/counters', 'CountersController@index');
Route::patch('/api/counters/{counter}', 'CountersController@update');
Route::patch('/api/counters/{counter}/increment', 'CountersController@increment');

// Wysiwyg
Route::get('/api/contents', 'ContentController@index');
Route::get('/api/images', 'ContentController@getImages');
Route::get('/api/contents/footer/{type}', 'ContentController@getContent');
Route::get('/api/contents/{name}', 'ContentController@getContent');
Route::patch('/api/contents/{content}', 'ContentController@update');
Route::post('/upload', 'ContentController@uploadImg');

// Controller d'export
Route::post('/export-sims', 'ExportController@exportSims');
Route::post('/export-baskets', 'ExportController@exportBaskets');


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



