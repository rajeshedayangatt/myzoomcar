import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {getVehicle} from "../../../redux/action/admin/vehicle/action";
import axios from "axios";


class ListVehicles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            vehicle_list : []
        }
    }

    render() {

        return (
            <div>
                <h3>Manage Vehicles</h3>
                <hr />
                <div >
                    {
                        (this.state.vehicle_list.length > 0) ? (
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Vehicle Title</th>
                                    <th scope="col">Brand</th>
                                    <th scope="col">Price Per Day</th>
                                    <th scope="col">Fuel Type</th>
                                    <th scope="col">Model Year</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        
                                        this.state.vehicle_list.map( el => (
                                            <tr key={el.id}>
                                                <td>{el.BrandName}</td>
                                                <td>{el.CreationDate}</td>
                                                <td>{el.UpdationDate}</td>
                                                <td>
                                                    <Link to={`/admin/brand/manage/edit/${el.id}`}>update</Link>
                                                    <a className="ml-2" href="#" onClick={
                                                        () => this.removeBrand(el.id)
                                                        }>Delete</a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                
                                
                                </tbody>
                            </table>

                        ) : (
                            <h3>Loading</h3>
                        )
                    }
                    
                </div>
            </div>
        );

    }

}


export default ListVehicles;