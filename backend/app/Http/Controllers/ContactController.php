<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;

class ContactController extends Controller
{
    public function info(){
        $data =  Contact::where('id','1')->first();
        return $data;
    }


    public function update(Request $request) {


        $contact = Contact::where('id',1)->first();
        $contact->Address = $request->address;
        $contact->EmailId = $request->email;
        $contact->ContactNo = $request->contact;
        $contact->save();

        return $contact;

    }
}
