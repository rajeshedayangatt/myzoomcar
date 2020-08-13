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

Route::post('/vehicle/save','VehicleController@store');
Route::get('/vehicle/list','VehicleController@lists');
Route::get('/vehicle/list/{vehicleid}','VehicleController@list');
Route::get('/vehicle/remove/{brandid}','VehicleController@delete');

Route::get('/booking/lists','BookingController@lists');
Route::get('/booking/confirm/{bookingid}','BookingController@confirm');
Route::get('/booking/cancel/{bookingid}','BookingController@cancel');


Route::get('/testimonial/lists','TestimonialController@lists');
Route::get('/testimonial/active/{id}','TestimonialController@statusupdateActive');
Route::get('/testimonial/inactive/{id}','TestimonialController@statusupdateInactive');


Route::get('/contactus/lists','ContactusController@lists');
Route::get('/contactus/read/{id}','ContactusController@contactStatusUpdate');

Route::get('/regusers/lists','RegusersController@lists');


Route::get('/page/{id}','PageController@getpage');
Route::post('/page/save','PageController@savePage');



Route::get('/contact/info','ContactController@info');
Route::post('/contact/update','ContactController@update');

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
