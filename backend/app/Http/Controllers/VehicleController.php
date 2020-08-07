<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Vehicle;
use App\Traits\UploadTrait;


class VehicleController extends Controller
{
    use UploadTrait;

    public function list() {

        $vehicle = Vehicle::leftJoin('tblbrands', function($join) {
                $join->on('tblvehicles.VehiclesBrand', '=', 'tblbrands.id');
          })->get();

        return $vehicle;
    }

    public function store(Request $request){

        $vehicle = new Vehicle;
        $vehicle->VehiclesTitle = $request->vTitle;
        $vehicle->VehiclesBrand = $request->vBrand;
        $vehicle->VehiclesOverview = $request->vOverview;
        $vehicle->PricePerDay = $request->vPricePerDay;
        $vehicle->FuelType = $request->vSelectFuelType;
        $vehicle->ModelYear = $request->vModelYear;
        $vehicle->SeatingCapacity = $request->vSeatingCapacity;


        //vehicle images upload 
        if ($request->has('vImage1')) {

            $image = $request->file('vImage1');
            if(isset($image)) {

                $name = "vehicle1".'_'.time();
                $folder = '/uploads/images/';
                $filePath = $folder . $name. '.' . $image->getClientOriginalExtension();
                // Upload image
                $this->uploadOne($image, $folder, 'public', $name);
                // Set user profile image path in database to filePath
                $vehicle->Vimage1 = $name. '.' . $image->getClientOriginalExtension();
            }

        }



        if ($request->has('vImage2')) {

            $image = $request->file('vImage2');

            if(isset($image2)) {
                
                $name = "vehicle2".'_'.time();
                $folder = '/uploads/images/';
                $filePath = $folder . $name. '.' . $image2->getClientOriginalExtension();
                // Upload image
                $this->uploadOne($image2, $folder, 'public', $name2);
                // Set user profile image path in database to filePath
                $vehicle->Vimage2 = $name. '.' . $image->getClientOriginalExtension();

            }

        }

        if ($request->has('vImage3')) {

            $image = $request->file('vImage3');

            if(isset($image)) {
                $name = "vehicle3".'_'.time();
                $folder = '/uploads/images/';
                $filePath = $folder . $name. '.' . $image->getClientOriginalExtension();
                // Upload image
                $this->uploadOne($image, $folder, 'public', $name);
                // Set user profile image path in database to filePath
                $vehicle->Vimage3 = $name. '.' . $image->getClientOriginalExtension();
            }

        }


        if ($request->has('vImage4')) {

            $image = $request->file('vImage4');
            if(isset($image)) {
                $name = "vehicle4".'_'.time();
                $folder = '/uploads/images/';
                $filePath = $folder . $name. '.' . $image->getClientOriginalExtension();
                // Upload image
                $this->uploadOne($image, $folder, 'public', $name);
                // Set user profile image path in database to filePath
                $vehicle->Vimage4 = $name. '.' . $image->getClientOriginalExtension();

            }

        }



        if ($request->has('vImage5')) {

            $image = $request->file('vImage5');
            if(isset($image)) {
                $name = "vehicle5".'_'.time();
                $folder = '/uploads/images/';
                $filePath = $folder . $name. '.' . $image->getClientOriginalExtension();
                // Upload image
                $this->uploadOne($image, $folder, 'public', $name);
                // Set user profile image path in database to filePath
                $vehicle->Vimage5 = $name. '.' . $image->getClientOriginalExtension();
            }

        }

        //vehicle accessories upload
        if($request->vAccessories !== "") {

            $accessories_arr = explode(",",$request->vAccessories);
            if(!empty($accessories_arr)) {
                foreach($accessories_arr as $val) {

                    if($val == "air_condition"){
                        $vehicle->AirConditioner = 1;
                    }elseif($val == "power_door_lock"){
                        $vehicle->PowerDoorLocks = 1;
                    }elseif($val == "antilock_braking_system"){
                        $vehicle->AntiLockBrakingSystem = 1;
                    }elseif($val == "brake_assist"){
                        $vehicle->BrakeAssist = 1;
                    }elseif($val == "power_steering"){
                        $vehicle->PowerSteering = 1;
                    }elseif($val == "driver_airbag"){
                        $vehicle->DriverAirbag = 1;
                    }elseif($val == "passenger_airbag"){
                        $vehicle->PassengerAirbag = 1;
                    }elseif($val == "cd_player"){
                        $vehicle->CDPlayer = 1;
                    }elseif($val == "central_locking"){
                        $vehicle->CentralLocking = 1;
                    }elseif($val == "crash_sensor"){
                        $vehicle->CrashSensor = 1;
                    }elseif($val == "leather_seats"){
                        $vehicle->LeatherSeats = 1;
                    }elseif($val == "reg_date"){
                        $vehicle->RegDate = 1;
                    }

                }
            }

        }

        $vehicle->save();

        $vehicle = Vehicle::get();

        return $vehicle;
    }


    private function imageFileSave() {


    }
}
