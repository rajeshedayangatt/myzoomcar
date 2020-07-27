import React from "react";
import { Link} from "react-router-dom";

function DetailsUser () {

    return (
        <div>
            <h3>User Details</h3>
            <Link to="/admin/users">Back</Link>
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
                <button  className="btn btn-primary">Delete</button>
                <Link to="/admin/updateuser"  className="btn btn-primary ml-2">Update</Link>
            </div>
        </div>
    )

}

export default DetailsUser;