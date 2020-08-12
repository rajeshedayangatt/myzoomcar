import React from "react";
import { connect } from "react-redux";
import {getRegusers } from "../../../redux/action/admin/reguser/action";
import '../../../components/common.css'

class RegUsers extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getRegusers();
    }


    render() {
        return(
            <div>

              <h3>Registered Users</h3>
                <div className="table-responsive" >
                    {
                        (this.props.regusers.length > 0) ? (
                            <table className="table " id="booking_tbl">
                                <thead>
                                    <tr>
                                    <th style={{width:'5%'}} >#</th>
                                    <th  style={{width:'15%'}}>Name</th>
                                    <th  style={{width:'15%'}}>Email</th>
                                    <th  style={{width:'15%'}}>Contact No</th>
                                    <th  style={{width:'40%'}}>Dob</th>
                                    <th  style={{width:'40%'}}>Address</th>
                                    <th  style={{width:'40%'}}>City</th>
                                    <th  style={{width:'10%'}}>Country</th>
                                    <th   style={{width:'15%'}}>Reg Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        this.props.regusers.map( (el,index) => (
                                            <tr key={el.id}>
                                                <td>{index+1}</td>
                                                <td>{el.FullName}</td>
                                                <td>{el.EmailId}</td>
                                                <td>{el.ContactNo}</td>
                                                <td>{el.dob}</td>
                                                <td>{el.Address}</td>
                                                <td>{el.City}</td>
                                                <td>{el.Country}</td>
                                                <td>{el.RegDate}</td>
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
        )
    }
}


const mapStateToProps = (state) => {
    const regusers = state.reguser;
    return {
        regusers : regusers.regusers_list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRegusers : () => dispatch(getRegusers()),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(RegUsers);

