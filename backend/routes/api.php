<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/brand/list/{brandid}','BrandController@list');
Route::get('/brand/lists','BrandController@lists');
Route::post('/brand/save','BrandController@store');
Route::post('/brand/update','BrandController@update');
Route::get('/brand/remove/{brandid}','BrandController@delete');

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
