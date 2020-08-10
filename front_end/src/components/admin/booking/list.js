import React from "react";
import { connect } from "react-redux";
import { getBookingList } from "../../../redux/action/admin/booking/action"
import { Link } from "react-router-dom";
import '../../../components/common.css'

class BookingList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bookings : []
        }       
    }

    componentDidMount() {
        this.props.getBooking().then(() => {
            this.setState({
                bookings : this.props.bookings
            });
        });
    }

    render(){
        
        return (
            <div>
                <h3>Manage Bookings</h3>
                <div className="table-responsive" >
                    {
                        (this.state.bookings.length > 0) ? (
                            <table className="table " id="booking_tbl">
                                <thead>
                                    <tr>
                                    <th style={{width:'5%'}} >#</th>
                                    <th  style={{width:'5%'}}>Name</th>
                                    <th  style={{width:'5%'}}>Vehicle</th>
                                    <th  style={{width:'5%'}}>From Date</th>
                                    <th  style={{width:'5%'}}>To Date</th>
                                    <th  style={{width:'50%'}}> Message</th>
                                    <th  style={{width:'5%'}} >Status</th>
                                    <th  style={{width:'5%'}} >Posting Date</th>
                                    <th   style={{width:'5%'}}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        this.state.bookings.map( (el,index) => (
                                            <tr key={el.id}>
                                                <td>{index+1}</td>
                                                <td>{el.FullName}</td>
                                                <td>{el.VehiclesTitle}</td>
                                                <td>{el.FromDate}</td>
                                                <td>{el.ToDate}</td>
                                                <td className="text-nowrap">{el.message}</td>
                                                <td>{
                                                
                                                 (() => {

                                                     console.log("status",el)
                                                     
                                                     if(el.Status == 0) {
                                                        return <span>Not Confirmed yet</span>
                                                     }else if(el.Status == 1) {
                                                        return <span>Confirme</span>
                                                     }else if(el.Status == 2) {
                                                        return <span>Cancelled</span>
                                                     }
                                                 })()
                                                }</td>

                                                <td>{el.PostingDate}</td>
                                                <td>
                                                    <a className="ml-2" href="#" onClick={
                                                        () => this.removeBrand(el.id)
                                                        }>Confirme</a>

                                                    <a className="ml-2" href="#" onClick={
                                                        () => this.removeBrand(el.id)
                                                        }>Cancel</a>
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
        )

    }
}

const mapStateToProps = (state) => {
    const booking = state.booking;

    return {
        bookings : booking.booking_list
    }
}

const dispatchStateToProps = (dispatch) => {
    return {
        getBooking : () => dispatch(getBookingList())
    }
}

export default connect(mapStateToProps,dispatchStateToProps)(BookingList);