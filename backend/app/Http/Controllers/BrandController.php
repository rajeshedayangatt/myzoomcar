<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Brand;

class BrandController extends Controller
{

    public function list($brandid) {

        $brand = Brand::where("id",$brandid)->first();
        return $brand;
    }


    public function lists() {

        $brands = Brand::get();

        return $brands;
    }

    public function store(Request $request) {

        $brand = new Brand;
        $brand->BrandName =  $request->brandname;
        $brand->CreationDate = date("Y-m-d H:i:s");
        $brand->save();

        $brands = Brand::get();
        return $brands;

    }

    public function update(Request $request) {


        $brand = Brand::where("id",$request->brandid)->first();

        $brand->BrandName =  $request->brandname;
        $brand->UpdationDate = date("Y-m-d H:i:s");
        $brand->save();

        
        $brands = Brand::get();
        return $brands;

    }

    public function delete($brandid){
        $brand = Brand::where("id",$brandid)->first();
        $brand->delete();
        $brands = Brand::get();
        return $brands;

    }
}
