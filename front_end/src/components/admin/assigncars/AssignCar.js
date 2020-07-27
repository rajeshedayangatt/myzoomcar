import React from "react";


function AssignCar() {


    return(

        <div>
            <h3>Assign Cars</h3>
            <div >
                <div className="form-group">
                    <label for="exampleInputEmail1">Car No</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Driver Id</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Salak Balance</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Date</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Start Time</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                
                <div class="form-group">
                    <label for="exampleInputPassword1">End TIme</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Reson</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </div>
       
    )

}


export default AssignCar;