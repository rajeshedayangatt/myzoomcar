import React , { useState,useEffect } from "react";
import { addVehicle } from "../../../redux/action/admin/vehicle/action";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { useParams , Link } from "react-router-dom";
import axios from "axios";


const UpdateVehicle = (props) => {



    const [vTitle,setVTitle] = useState("");
    const [vBrand,setVBrand] = useState("");
    const [vOverview,setVOverview] = useState("");
    const [vPricePerDay,setVPricePerDay] = useState("");
    const [vSelectFuelType,setVSelectFuelType] = useState("");
    const [vModelYear,setVModelYear] = useState("");
    const [vSeatingCapacity,setVSeatingCapacity] = useState("");
    const [vAccessories,setVAccessories] = useState([]);


    const [vLeatherSeats,setvLeatherSeats] = useState(false);
    const [vCentralLocking,setvCentralLocking] = useState(false);
    const [vCrashSensor,setvCrashSensor] = useState(false);
    const [vCdPlayer,setvCdPlayer] = useState(false);
    const [vPassengerAirBag,setvPassengerAirBag] = useState(false);
    const [vAirCondition,setvAirCondition] = useState(false);
    const [vPowerDoorLocks,setvPowerDoorLocks] = useState(false);
    const [vAntiBrakeSystem,setvAntiBrakeSystem] = useState(false);
    const [vBrakeAssist,setvBrakeAssist] = useState(false);
    const [vPowerSteering,setvPowerSteering] = useState(false);
    const [vDriverAirBag,setvDriverAirBag] = useState(false);



    const [vImage1,setVImage1] = useState("");
    const [vImage2,setVImage2] = useState("");
    const [vImage3,setVImage3] = useState("");
    const [vImage4,setVImage4] = useState("");
    const [vImage5,setVImage5] = useState("");
    // const manageAccessories = (e) => {

    //     console.log("vPassengerAirBag",1);
    //     if(vPassengerAirBag == 1){
    //         setvPassengerAirBag("");
    //     }else{
    //         setVAccessories(vAccessories.concat(e.target.name));
    //     }

    // } 

    const createAccessoriesSelectedArray = () => {

        let temp_arr = [];

        if(vAirCondition){
            temp_arr.push("air_condition");
        }

        if(vPowerDoorLocks){
            temp_arr.push("power_door_lock");
        }

        if(vAntiBrakeSystem){
            temp_arr.push("antilock_braking_system");
        }

        if(vBrakeAssist){
            temp_arr.push("brake_assist");
        }

        if(vPowerSteering){
            temp_arr.push("power_steering");
        }

        if(vDriverAirBag){
            temp_arr.push("driver_airbag");
        }

        if(vPassengerAirBag){
            temp_arr.push("passenger_airbag");
        }

        if(vCdPlayer){
            temp_arr.push("cd_player");
        }

        if(vCentralLocking){
            temp_arr.push("central_locking");
        }

        if(vCrashSensor){
            temp_arr.push("crash_sensor");
        }


        if(vLeatherSeats){
            temp_arr.push("leather_seats");
        }

        return temp_arr;
    }

    const submitForm = () => {

        let vAccessories = createAccessoriesSelectedArray();

        var data = {
            vTitle,
            vBrand,
            vOverview,
            vPricePerDay,
            vSelectFuelType,
            vModelYear,
            vSeatingCapacity,
            vImage1,
            vImage2,
            vImage3,
            vImage4,
            vImage5,
            vAccessories
        };


        const formData = new FormData();

        formData.set("vTitle", vTitle);
        formData.set("vBrand", vBrand);
        formData.set("vOverview", vOverview);
        formData.set("vPricePerDay", vPricePerDay);
        formData.set("vSelectFuelType", vSelectFuelType);
        formData.set("vModelYear", vModelYear);
        formData.set("vSeatingCapacity", vSeatingCapacity);
        formData.set("vAccessories", vAccessories);
        formData.set("vehicleid", id);

        formData.append("vImage1", vImage1);
        formData.append("vImage2", vImage2);
        formData.append("vImage3", vImage3);
        formData.append("vImage4", vImage4);
        formData.append("vImage5", vImage5);

        props.saveVehicle(formData);
    };

    //vehicle id from url parameter
    let { id } = useParams();

    //vehicle data onload
    useEffect(() => {
        
        axios.get("http://127.0.0.1:8000/api/vehicle/list/"+id).then((res) => {

            //manage vehicle basic info
            setVTitle(res.data.VehiclesTitle);
            setVBrand(res.data.VehiclesBrand);
            setVOverview(res.data.VehiclesOverview);
            setVPricePerDay(res.data.PricePerDay);
            setVSelectFuelType(res.data.FuelType);
            setVModelYear(res.data.ModelYear);
            setVSeatingCapacity(res.data.SeatingCapacity);


            //manage vehicle images
            if(res.data.Vimage1 !== "") {
                setVImage1("http://127.0.0.1:8000/uploads/images/"+res.data.Vimage1);
            }
            if(res.data.Vimage2 !== "") {
                setVImage2("http://127.0.0.1:8000/uploads/images/"+res.data.Vimage2);
            }
            if(res.data.Vimage3 !== "") {
                setVImage3("http://127.0.0.1:8000/uploads/images/"+res.data.Vimage3);
            }
            if(res.data.Vimage4 !== "") {
                setVImage4("http://127.0.0.1:8000/uploads/images/"+res.data.Vimage4);
            }
            if(res.data.Vimage5 !== "") {
                setVImage5("http://127.0.0.1:8000/uploads/images/"+res.data.Vimage5);
            }
            if(res.data.Vimage5 !== "") {

            }

            //mange vehicle attributes

            if(res.data.LeatherSeats === 1) {
                setvLeatherSeats(true);
            }

            if(res.data.CentralLocking === 1) {
                setvCentralLocking(true);
            }

            if(res.data.CrashSensor === 1) {
                setvCrashSensor(true);
            }
            if(res.data.CDPlayer === 1) {
                setvCdPlayer(true);
            }
            if(res.data.PassengerAirbag === 1) {
                setvPassengerAirBag(true);
            }
            if(res.data.AirConditioner === 1) {
                setvAirCondition(true);
            }
            if(res.data.PowerDoorLocks === 1) {
                setvPowerDoorLocks(true);
            }

            if(res.data.AntiLockBrakingSystem === 1) {
                setvAntiBrakeSystem(true);
            }
            if(res.data.BrakeAssist === 1) {
                setvBrakeAssist(true);
            }
            if(res.data.PowerSteering === 1) {
                setvPowerSteering(true);
            }
            if(res.data.DriverAirbag === 1) {
                setvDriverAirBag(true);
            }

            setvAirCondition("true");

        });

    },[]);


    return(

        <div>
            <h3>Update vehicle</h3>

            <div className="card">

                <div className="card-header">Basic Info</div>

                <div className="card-body">

                    <div className="row">
                        <div className="col-md-12">

                            <div className="row">

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Vehicle Title</label>
                                            <input type="text" className="form-control" placeholder="Enter title" onChange={ (e) => {
                                                setVTitle(e.target.value)
                                            }} value={vTitle}  />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" >Select Brand</label>
                                            <select className="form-control" onChange={ (e) => {
                                                setVBrand(e.target.value)
                                            }}>
                                                <option value="bmw" >Bmw</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </div>
                                    </div>
                                
                            </div>

                            <hr />

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Vehicle Overview</label>
                                        <textarea className="form-control"  onChange={ (e) => {
                                                setVOverview(e.target.value)
                                            }} value={vOverview}></textarea>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Price Per Day(in USD)</label>
                                            <input type="text" className="form-control" placeholder="Enter title" onChange={ (e) => {
                                                setVPricePerDay(e.target.value)
                                            }} value={vPricePerDay}  />
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Select Fuel Type</label>
                                            <select className="form-control" onChange={ (e) => {
                                                setVSelectFuelType(e.target.value)
                                            }} >
                                                <option value="bmw">Bmw</option>
                                            </select>
                                        </div>
                                    </div>
                            </div>


                            <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Model Year</label>
                                            <input type="text" className="form-control" placeholder="Enter title" 
                                            onChange={ (e) => {
                                                setVModelYear(e.target.value)
                                            }}
                                             />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Seating Capacity</label>
                                            <input type="text" className="form-control" placeholder="Enter title"  
                                            onChange={ (e) => {
                                                setVSeatingCapacity(e.target.value)
                                            }}
                                            />
                                        </div>
                                    </div>
                            </div>

                            <hr />

                            <div className="row">
                                <div className="col-md-12">
                                <h5 >Upload Images</h5> 
                                </div>
                            </div>

                            <div className="row">

                            
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Image 1</label>
                                        {
                                            (vImage1 === "" ) ? (
                                                <input type="file" name="" onChange={ (e) => {
                                                    setVImage1(e.target.files[0])
                                                }} />
                                            ) : (
                                                <img src={vImage1} width="200" height="200" />
                                            )
                                        }


                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Image 2</label>
                                        {
                                            (vImage2 === "") ? (

                                                <input type="file" name=""  onChange={ (e) => {
                                                    setVImage2(e.target.files[0])
                                                }} />

                                            ) : (
                                                <img src={vImage2} width="200" height="200" />
                                            )

                                        }
                                       
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Image 3</label>

                                        {
                                            (vImage3 === "" ) ? (

                                                <input type="file" name=""  onChange={ (e) => {
                                                    setVImage3(e.target.files[0])
                                                }} />

                                            ) : (
                                                <img src={vImage3} width="200" height="200" />
                                            )

                                        }
                                       
                                    </div>
                                </div>
                            </div>


                            <div className="row">

                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Image 4</label>
                                        {
                                            (vImage4 === "" ) ? (

                                                <input type="file" name=""  onChange={ (e) => {
                                                    setVImage4(e.target.files[0])
                                                }} />

                                            ) : (
                                                <img src={vImage4}  width="200" height="200"/>
                                            )

                                        }
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Image 5</label>
                                        {
                                            (vImage5 === "" ) ? (
                                                <input type="file" name=""  onChange={ (e) => {
                                                    setVImage5(e.target.files[0])
                                                }} />

                                            ) : (
                                                <img src={vImage5} width="200" height="200" />
                                            )

                                        }
                                    </div>
                                </div>
                                <div className="col-md-4">
                                
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>


            <div className="card mt-5">

            <div className="card-header">Accessories</div>

                <div className="card-body">

                    <div className="row">

                        <div className="col-md-3">


                            <input type="checkbox"  name="air_condition" 
                            checked={ vAirCondition ? "checked" : "" }
                            onChange={(e) => {
                                (vAirCondition) ? setvAirCondition(false) : setvAirCondition(true);
                            }} 

                            />

                            <label className="ml-2">Air Conditioner</label>
                        </div>

                        <div className="col-md-3">

                            <input type="checkbox" name="power_door_lock" 
                                 checked={ vPowerDoorLocks ? "checked" : "" }

                            onChange={(e) => {
                                        (vPowerDoorLocks) ? setvPowerDoorLocks(false): setvPowerDoorLocks(true);
                                    }} 
                                />
                            <label className="ml-2">Power Door Locks</label>
                        </div>

                        <div className="col-md-3">
                        <input type="checkbox" name="antilock_braking_system"
                                         checked={ vAntiBrakeSystem ? "checked" : "" }

                         onChange={(e) => {
                                                (vAntiBrakeSystem) ? setvAntiBrakeSystem(false): setvAntiBrakeSystem(true);
                                    }} 
                                />

                            <label className="ml-2">AntiLock Braking System</label>
                        </div>

                        <div className="col-md-3">
                        
                            <input type="checkbox" name="brake_assist" 
                                   checked={ vBrakeAssist ? "checked" : "" }

                            onChange={(e) => {
                                                (vBrakeAssist) ? setvBrakeAssist(false): setvBrakeAssist(true);
                                    }} 
                                />

                            <label className="ml-2">Brake Assist</label>
                        </div>

                        <div className="col-md-3">

                            <input type="checkbox" name="power_steering"
                                            checked={ vPowerSteering ? "checked" : "" }

                             onChange={(e) => {
                                                (vPowerSteering) ? setvPowerSteering(false): setvPowerSteering(true);
                                    }} 
                                />

                          
                            <label className="ml-2">Power Steering</label>
                        </div>

                        <div className="col-md-3">

                            <input type="checkbox" name="driver_airbag" 
                                  checked={ vDriverAirBag ? "checked" : "" }

                             onChange={(e) => {
                                                (vDriverAirBag) ? setvDriverAirBag(false): setvDriverAirBag(true);
                                    }} 
                                />

                           
                            <label className="ml-2">Driver Airbag</label>
                        </div>

                        <div className="col-md-3">

                            <input type="checkbox" name="passenger_airbag" 
                                                                checked={ vPassengerAirBag ? "checked" : "" }

                            onChange={(e) => {
                                                (vPassengerAirBag) ? setvPassengerAirBag(false): setvPassengerAirBag(true);
                                    }} 
                                />


                           <label className="ml-2">Passenger Air Bag</label>
                       </div>

                       <div className="col-md-3">
                                        
                                <input type="checkbox" name="cd_player" 
                                
                                checked={ vCdPlayer ? "checked" : "" }

                                 onChange={(e) => {
                                                (vCdPlayer) ? setvCdPlayer(false): setvCdPlayer(true);
                                                }} 
                                />
                           
                           <label className="ml-2">Cd Player</label>
                       </div>

                       <div className="col-md-3">

                       <input type="checkbox" name="central_locking"
                                                        checked={ vCentralLocking ? "checked" : "" }

                     onChange={(e) => {
                                                (vCentralLocking) ? setvCentralLocking(false): setvCentralLocking(true);
                                                }} 
                                />
                           

                           <label className="ml-2">Central Locking</label>
                       </div>
                       <div className="col-md-3">
                             <input type="checkbox" name="crash_sensor"
                            checked={ vCrashSensor ? "checked" : "" }

                              onChange={(e) => {
                                                (vCrashSensor) ? setvCrashSensor(false): setvCrashSensor(true);
                                                }} 
                                />

                           <label className="ml-2">Crash Sensor</label>
                       </div>

                       <div className="col-md-3">
                            <input type="checkbox" name="leather_seats" 

                            checked={ vLeatherSeats ? "checked" : "" }

                            onChange={(e) => {
                                                    (vLeatherSeats) ? setvLeatherSeats(false)  : setvLeatherSeats(true);
                                        }} 
                                    />
                            

                          
                           <label className="ml-2">Leather Seats</label>
                       </div>

                    </div>

                    <div className="row">

                        <div className="col-md-12">
                            <div className="float-right">

                                <Link to="/admin/vehicle/manage" className="btn btn-default">Back</Link>
                                <button className="btn btn-info ml-2" onClick={submitForm}>Submit</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )

};

const MapDispatchToProps = (dispatch,ownProps) => {
    return {
        saveVehicle : (data) =>  dispatch(addVehicle(data,ownProps))
    }
}

export default withRouter(connect(null,MapDispatchToProps)(UpdateVehicle));