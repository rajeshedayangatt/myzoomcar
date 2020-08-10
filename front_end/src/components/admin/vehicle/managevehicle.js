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


    
    componentWillMount() {

        this.props.loadVehicles().then(() => {
            this.setState({
                vehicle_list : this.props.listvehicle
            });
        });

        // this.props.listbrand[0]
    }

    removeVehicle(id) {
        var confirm = window.confirm("Are you sure wanted to delete?");
        if(confirm) {
            axios.get("http://127.0.0.1:8000/api/vehicle/remove/"+id).then((res) => {
                alert("successfully updated")
                this.props.loadVehicles().then(() => {
                    this.setState({
                        vehicle_list : this.props.listvehicle
                    });
                });
            })
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
                                                <td>{el.VehiclesTitle}</td>
                                                <td>{el.BrandName}</td>
                                                <td>{el.PricePerDay}</td>
                                                <td>{el.FuelType}</td>
                                                <td>{el.ModelYear}</td>
                                                <td>
                                                    <Link to={`/admin/vehicle/manage/edit/${el.id}`}>update</Link>
                                                    <a className="ml-2" href="#" onClick={
                                                        () => this.removeVehicle(el.id)
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

const mapDispatchToProps  = dispatch => {

    return {
        loadVehicles : () => dispatch(getVehicle())
    }
}


const mapStateToProps = state => {
    const vehicle = state.vehicle;
    return {
        listvehicle : vehicle.vehicle
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListVehicles);