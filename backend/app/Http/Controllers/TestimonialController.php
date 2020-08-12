<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Testimonial;
use DB;


class TestimonialController extends Controller
{
    public function lists() {

        $testimonial = Testimonial::select(
            DB::raw('tbltestimonial.*,tblusers.FullName')
            )
        ->leftJoin('tblusers',function($join) {
            $join->on('tbltestimonial.userEmail','=','tblusers.EmailId');
        })->get();

        return $testimonial;
    }

    public function statusupdateActive($testmonial_id) {
        $testimon = Testimonial::where('id',$testmonial_id)->first();
        $testimon->status = 1;
        $testimon->save();

        $testimonial = Testimonial::select(
            DB::raw('tbltestimonial.*,tblusers.FullName')
            )
            ->leftJoin('tblusers',function($join) {
                $join->on('tbltestimonial.userEmail','=','tblusers.EmailId');
            })->get();

        return $testimonial;
    }

    public function statusupdateInactive($testmonial_id) {
        $testimon = Testimonial::where('id',$testmonial_id)->first();
        $testimon->status = 0;
        $testimon->save();

        $testimonial = Testimonial::select(
            DB::raw('tbltestimonial.*,tblusers.FullName')
            )
            ->leftJoin('tblusers',function($join) {
                $join->on('tbltestimonial.userEmail','=','tblusers.EmailId');
            })->get();

        return $testimonial;
    }
}
