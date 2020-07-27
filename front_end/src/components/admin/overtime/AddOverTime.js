import React from "react";


function AddOverTime() {


    return(

        <div>
            <h3>Add Over Time</h3>
            <div >
                <div className="form-group">
                    <label for="exampleInputEmail1">Employee Id</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Overtime</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Date</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Reason</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </div>
       
    )

}


export default AddOverTime;