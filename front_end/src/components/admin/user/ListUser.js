import React from "react";
import { Link } from "react-router-dom";


function ListUser() {


    return(

        <div>
            <h3>Table Users</h3>
            <Link to="/admin/adduser">Add User</Link>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Fullname</th>
                    <th scope="col">Email</th>
                    <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>admin</td>
                        <td>admin</td>
                        <td>admnin@gmail.com</td>
                        <td><Link to="/admin/detailsUser">Details</Link></td>
                    </tr>
                    <tr>
                        <td>admin</td>
                        <td>admin</td>
                        <td>admnin@gmail.com</td>
                        <td><Link to="/admin/detailsUser">Details</Link></td>
                    </tr>
                    <tr>
                        <td>admin</td>
                        <td>admin</td>
                        <td>admnin@gmail.com</td>
                        <td><Link to="/admin/detailsUser">Details</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
       
    )

}


export default ListUser;