import React from "react";
import { Link } from "react-router-dom";


function ListOverTime() {


    return(

        <div>
            <h3>Table OverTime</h3>
            <Link to="/admin/addovertime">Add Overtime</Link>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Sr No</th>
                    <th scope="col">Email id</th>
                    <th scope="col">Hours</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date</th>
                    <th scope="col">Reason</th>

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


export default ListOverTime;