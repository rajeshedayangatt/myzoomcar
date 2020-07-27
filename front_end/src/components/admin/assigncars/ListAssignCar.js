import React from "react";
import { Link } from "react-router-dom";


function ListAssignCar() {


    return(

        <div>
            <h3>Table Assigned Cars</h3>
            <Link to="/admin/assigncar">Assign Car</Link>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Sr No</th>
                    <th scope="col">Driver</th>
                    <th scope="col">Car No</th>
                    <th scope="col">Salak Balance</th>
                    <th scope="col">Date</th>
                    <th scope="col">Start Time</th>
                    <th scope="col">End Time</th>
                    <th scope="col">Reason</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>admnin@gmail.com</td>
                        <td>123</td>
                        <td>123</td>
                        <td>15/02/1990</td>
                        <td>Reason</td>
                    </tr>
                  
                </tbody>
            </table>
        </div>
       
    )

}


export default ListAssignCar;