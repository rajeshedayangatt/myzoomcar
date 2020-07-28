import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {getBrands} from "../../../redux/action/admin/brand/action";
import axios from "axios";

class ManageBrand extends React.Component {

    constructor(props) {
        super(props);
        this.removeBrand = this.removeBrand.bind(this)
        this.state = {
            brand_content_list : []
        };
            
        
    }

    componentWillMount() {

        this.props.loadBrands().then(() => {
            this.setState({
                brand_content_list : this.props.listbrand
            });
        });

        // this.props.listbrand[0]
    }

    removeBrand(id) {
        var confirm = window.confirm("Are you sure wanted to delete?");
        if(confirm) {
            axios.get("http://127.0.0.1:8000/api/brand/remove/"+id).then((res) => {
                alert("successfully updated")
                console.log("props",this.props);
                this.props.loadBrands().then(() => {
                    console.log(" this.props.listbrand", this.props.listbrand);
                    this.setState({
                        brand_content_list : this.props.listbrand
                    });
                });
            })
        }
    }

    render() {

        return (
            <div>
                <h3>Manage Brand</h3>
                <hr />
                <div >
                    {
                        (this.state.brand_content_list.length > 0) ? (
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Brand Name</th>
                                    <th scope="col">Created Date</th>
                                    <th scope="col">Updation Date</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        
                                        this.state.brand_content_list.map( el => (
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


const mapDispatchToProps  = dispatch => {

    return {
        loadBrands : () => dispatch(getBrands())
    }
}



const mapStateToProps = state => {
    const brands = state.brand;
    return {
        listbrand : brands.brands
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ManageBrand);