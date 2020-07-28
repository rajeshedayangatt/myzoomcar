import React from "react";

const AddVehicle = () => {

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
                                            <input type="text" className="form-control" placeholder="Enter title"  />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Select Brand</label>
                                            <select className="form-control">
                                                <option value="bmw">Bmw</option>
                                            </select>
                                        </div>
                                    </div>
                                
                            </div>

                            <hr />

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Vehicle Overview</label>
                                        <textarea className="form-control" />
                                    </div>
                                </div>
                            </div>

                            
                            <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Price Per Day(in USD)</label>
                                            <input type="text" className="form-control" placeholder="Enter title"  />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Select Fuel Type</label>
                                            <select className="form-control">
                                                <option value="bmw">Bmw</option>
                                            </select>
                                        </div>
                                    </div>
                            </div>


                            <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Model Year</label>
                                            <input type="text" className="form-control" placeholder="Enter title"  />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Seating Capacity</label>
                                            <input type="text" className="form-control" placeholder="Enter title"  />
                                        </div>
                                    </div>
                            </div>

                            <hr />

                            <div className="row">
                                <div className="col-md-12">
                                <h3 >Upload Images</h3> 
                                </div>
                            </div>

                            <div className="row">

                            
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Image 1</label>
                                        <input type="file" name="" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                            <label>Image 1</label>
                                            <input type="file" name="" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Image 1</label>
                                        <input type="file" name="" />
                                    </div>
                                </div>
                            </div>


                            <div className="row">

                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Image 1</label>
                                        <input type="file" name="" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                            <label>Image 1</label>
                                            <input type="file" name="" />
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
                            
                            <input type="checkbox" />
                            <label className="ml-2">Air Conditioner</label>
                        </div>

                        <div className="col-md-3">
                          
                            <input type="checkbox" />
                            <label className="ml-2">Power Door Locks</label>
                        </div>

                        <div className="col-md-3">
                           
                            <input type="checkbox" />
                            <label className="ml-2">Power Door Locks</label>
                        </div>

                        <div className="col-md-3">
                           
                            <input type="checkbox" />
                            <label className="ml-2">Power Door Locks</label>
                        </div>

                        <div className="col-md-3">
                          
                            <input type="checkbox" />
                            <label className="ml-2">Power Door Locks</label>
                        </div>

                        <div className="col-md-3">
                           
                            <input type="checkbox" />
                            <label className="ml-2">Power Door Locks</label>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-12">
                            <div className="float-right">
                                <button className="btn btn-default">Cancel</button>
                                <button className="btn btn-info ml-2">Submit</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )

};

export default AddVehicle;