import React from "react";
import { Link } from "react-router-dom";


function ListCars() {


    return(

        <div>
            <h3>Table  Cars</h3>
            <Link to="/admin/addcar">Add Car</Link>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Car No</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Model</th>
                    <th scope="col">Picture</th>
                    <th scope="col">Details</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>mmm</td>
                        <td>Lamborgini</td>
                        <td>aventador</td>
                        <td>pic</td>
                        <td>
                            <Link to="/admin/cardetails">Details</Link>
                        </td>
                    </tr>
                  
                </tbody>
            </table>
        </div>
       
    )

}


export default ListCars;