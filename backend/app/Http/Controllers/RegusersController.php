<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Reguser;


class RegusersController extends Controller
{
    public function lists() {

        $users = Reguser::get();
        return $users;
    }
}
