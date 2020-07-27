import React from "react";


function AddUser() {


    return(

        <div>
            <h3>Add User</h3>
            <div >
                <div className="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Fullname</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>


                <div class="form-group">
                    <label for="exampleInputPassword1">Department</label>
                    <select className="form-control">
                        <option value="">Admin</option>
                        <option value="">Other</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Grade</label>
                    <select className="form-control">
                        <option value="">1st</option>
                        <option value="">2nd</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </div>
       
    )

}


export default AddUser;