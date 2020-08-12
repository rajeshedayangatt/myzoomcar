<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contactus;


class ContactusController extends Controller
{
    public function lists() {
        $contact = Contactus::get();
        return $contact;
    }


    public function contactStatusUpdate($id) {
        
        $contact = Contactus::where('id',$id)->first();
        $contact->status = 1;
        $contact->save();

        $contact = Contactus::get();
        return $contact;
    }
}
