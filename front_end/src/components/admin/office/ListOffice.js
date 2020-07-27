import React from "react";
import { Link } from "react-router-dom";


function ListOffice() {


    return(

        <div>
            <h3>Table OverTime</h3>
            <Link to="/admin/addoffice">Add Office</Link>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Sr No</th>
                    <th scope="col">Manager</th>
                    <th scope="col">Location</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Rent</th>
                    <th scope="col">Internet</th>
                    <th scope="col">Start Time</th>
                    <th scope="col">End Time</th>
                    <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>rajesh</td>
                        <td>dubai</td>
                        <td>2444555</td>
                        <td>20000</td>
                        <td>2000</td>
                        <td>09:00</td>
                        <td>17:00</td>
                        <td>
                            <Link to="/admin/updateoffice">Update</Link>
                            <a href="#">Delete</a>
                        </td>

                    </tr>
                  
                </tbody>
            </table>
        </div>
       
    )

}


export default ListOffice;