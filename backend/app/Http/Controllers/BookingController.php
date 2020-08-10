<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Booking;

class BookingController extends Controller
{
    public function lists() {

        $booking = Booking::leftJoin('tblusers',function($join) {
                    $join->on('tblbooking.userEmail','=','tblusers.EmailId');
                })->leftJoin('tblvehicles',function($join) {
                    $join->on('tblbooking.VehicleId','=','tblvehicles.id');
                })->get();

        return $booking;
    }
}
