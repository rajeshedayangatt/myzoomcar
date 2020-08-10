import React , { useState } from "react";
import { addVehicle } from "../../../redux/action/admin/vehicle/action";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const AddVehicle = (props) => {

    const [vTitle,setVTitle] = useState("");
    const [vBrand,setVBrand] = useState("");
    const [vOverview,setVOverview] = useState("");
    const [vPricePerDay,setVPricePerDay] = useState("");
    const [vSelectFuelType,setVSelectFuelType] = useState("");
    const [vModelYear,setVModelYear] = useState("");
    const [vSeatingCapacity,setVSeatingCapacity] = useState("");
    const [vAccessories,setVAccessories] = useState([]);

    const [vImage1,setVImage1] = useState("");
    const [vImage2,setVImage2] = useState("");
    const [vImage3,setVImage3] = useState("");
    const [vImage4,setVImage4] = useState("");
    const [vImage5,setVImage5] = useState("");
    const manageAccessories = (e) => {
        if(e.target.checked) {
            setVAccessories(vAccessories.concat(e.target.name));
        }
    } 

    const submitForm = () => {

        console.log("vAccessories",vAccessories);
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
        formData.set("vehicleid", "");

        formData.append("vImage1", vImage1);
        formData.append("vImage2", vImage2);
        formData.append("vImage3", vImage3);
        formData.append("vImage4", vImage4);
        formData.append("vImage5", vImage5);

        props.saveVehicle(formData);
    };

    return(

        <div>
            <h3>Post a vehicle</h3>

            <div className="card">

                <div className="card-header">Basic Info</div>

                <div className="card-body">

                    <div className="row">
                        <div className="col-md-12">

                            <div className="row">

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Vehicle Title</label>
                                            <input type="text" className="form-control" placeholder="Enter title" onChange={ (e) => {
                                                setVTitle(e.target.value)
                                            }}  />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="exampleInputEmail1" >Select Brand</label>
                                            <select className="form-control" onChange={ (e) => {
                                                setVBrand(e.target.value)
                                            }}>
                                                <option value="bmw">Bmw</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </div>
                                    </div>
                                
                            </div>

                            <hr />

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Vehicle Overview</label>
                                        <textarea className="form-control"  onChange={ (e) => {
                                                setVOverview(e.target.value)
                                            }} />
                                    </div>
                                </div>
                            </div>

                            
                            <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Price Per Day(in USD)</label>
                                            <input type="text" className="form-control" placeholder="Enter title" onChange={ (e) => {
                                                setVPricePerDay(e.target.value)
                                            }}  />
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Select Fuel Type</label>
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
                                            <label for="exampleInputEmail1">Model Year</label>
                                            <input type="text" className="form-control" placeholder="Enter title" 
                                            onChange={ (e) => {
                                                setVModelYear(e.target.value)
                                            }}
                                             />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Seating Capacity</label>
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
                                        <input type="file" name="" onChange={ (e) => {
                                            setVImage1(e.target.files[0])
                                        }} />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Image 2</label>
                                        <input type="file" name=""  onChange={ (e) => {
                                            setVImage2(e.target.files[0])
                                        }} />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Image 3</label>
                                        <input type="file" name=""  onChange={ (e) => {
                                            setVImage3(e.target.files[0])
                                        }} />
                                    </div>
                                </div>
                            </div>


                            <div className="row">

                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Image 4</label>
                                        <input type="file" name=""  onChange={ (e) => {
                                            setVImage4(e.target.files[0])
                                        }} />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Image 5</label>
                                        <input type="file" name=""  onChange={ (e) => {
                                            setVImage5(e.target.files[0])
                                        }} />
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
                            
                            <input type="checkbox" name="air_condition" onChange={manageAccessories}/>
                            <label className="ml-2">Air Conditioner</label>
                        </div>

                        <div className="col-md-3">
                          
                            <input type="checkbox" name="power_door_lock" onChange={manageAccessories} />
                            <label className="ml-2">Power Door Locks</label>
                        </div>

                        <div className="col-md-3">
                           
                            <input type="checkbox" name="antilock_braking_system" onChange={manageAccessories} />
                            <label className="ml-2">AntiLock Braking System</label>
                        </div>

                        <div className="col-md-3">
                           
                            <input type="checkbox" name="brake_assist" onChange={manageAccessories} />
                            <label className="ml-2">Brake Assist</label>
                        </div>

                        <div className="col-md-3">
                          
                            <input type="checkbox"  name="power_steering" onChange={manageAccessories}/>
                            <label className="ml-2">Power Steering</label>
                        </div>

                        <div className="col-md-3">
                           
                            <input type="checkbox" name="driver_airbag" onChange={manageAccessories} />
                            <label className="ml-2">Driver Airbag</label>
                        </div>

                        <div className="col-md-3">
                           
                           <input type="checkbox" name="passenger_airbag" onChange={manageAccessories} />
                           <label className="ml-2">Passenger Air Bag</label>
                       </div>

                       <div className="col-md-3">
                           
                           <input type="checkbox" name="cd_player" onChange={manageAccessories} />
                           <label className="ml-2">Cd Player</label>
                       </div>

                       <div className="col-md-3">
                           
                           <input type="checkbox" name="central_locking" onChange={manageAccessories} />
                           <label className="ml-2">Central Locking</label>
                       </div>
                       <div className="col-md-3">
                           
                           <input type="checkbox" name="crash_sensor" onChange={manageAccessories} />
                           <label className="ml-2">Crash Sensor</label>
                       </div>

                       <div className="col-md-3">
                           
                           <input type="checkbox" name="leather_seats" onChange={manageAccessories} />
                           <label className="ml-2">Leather Seats</label>
                       </div>

                       <div className="col-md-3">
                           
                           <input type="checkbox" name="reg_date" onChange={manageAccessories} />
                           <label className="ml-2">Reg Date</label>
                       </div>
                    </div>

                    <div className="row">

                        <div className="col-md-12">
                            <div className="float-right">
                                <button className="btn btn-default">Cancel</button>
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

export default withRouter(connect(null,MapDispatchToProps)(AddVehicle));