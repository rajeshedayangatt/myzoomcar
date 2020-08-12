<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Booking;
use DB;

class BookingController extends Controller
{
    public function lists() {

        $booking = Booking::select(
            DB::raw('tblbooking.*,tblusers.FullName,tblvehicles.VehiclesTitle')
            )
        ->leftJoin('tblusers',function($join) {
            $join->on('tblbooking.userEmail','=','tblusers.EmailId');
        })->leftJoin('tblvehicles',function($join) {
            $join->on('tblbooking.VehicleId','=','tblvehicles.id');
        })->get();

        return $booking;
    }

    public function confirm($booking_id) {

        $book = Booking::where('id',$booking_id)->first();
        $book->Status = 1;
        $book->save();

        $booking = Booking::select(
            DB::raw('tblbooking.*,tblusers.FullName,tblvehicles.VehiclesTitle')
            )
        ->leftJoin('tblusers',function($join) {
            $join->on('tblbooking.userEmail','=','tblusers.EmailId');
        })->leftJoin('tblvehicles',function($join) {
            $join->on('tblbooking.VehicleId','=','tblvehicles.id');
        })->get();

        return $booking;

    }

    public function cancel($booking_id) {

        $book = Booking::where('id',$booking_id)->first();
        $book->Status = 2;
        $book->save();
        
        $booking = Booking::select(
            DB::raw('tblbooking.*,tblusers.FullName,tblvehicles.VehiclesTitle')
            )
        ->leftJoin('tblusers',function($join) {
            $join->on('tblbooking.userEmail','=','tblusers.EmailId');
        })->leftJoin('tblvehicles',function($join) {
            $join->on('tblbooking.VehicleId','=','tblvehicles.id');
        })->get();

        return $booking;

    }
}
