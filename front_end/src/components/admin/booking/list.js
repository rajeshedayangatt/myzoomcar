import React from "react";
import { connect } from "react-redux";
import { getBookingList , confirmBooking , cancelBooking} from "../../../redux/action/admin/booking/action"
import { Link } from "react-router-dom";
import '../../../components/common.css'

class BookingList extends React.Component {

    constructor(props) {
        super(props);    
    }

    componentDidMount() {
        this.props.getBooking();
    }


    confirmBooking(bookingid){

        var confirm = window.confirm("Do you really want to Confirm this booking");
        if(confirm) {
            this.props.confirmBooking(bookingid).then(() => {
                alert("Successfully Updated");
            });

        }

    }


    cancelBooking(bookingid){
        var confirm = window.confirm("Do you really want to Cancel this booking");
        if(confirm) {
            this.props.cancelBooking(bookingid).then(() => {
                alert("Successfully Updated");
            });
        }

    }

    render(){
        
        return (
            <div>
                <h3>Manage Bookings</h3>
                <div className="table-responsive" >
                    {
                        (this.props.bookings.length > 0) ? (
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

                                        this.props.bookings.map( (el,index) => (
                                            <tr key={el.id}>
                                                <td>{index+1}</td>
                                                <td>{el.FullName}</td>
                                                <td>{el.VehiclesTitle}</td>
                                                <td>{el.FromDate}</td>
                                                <td>{el.ToDate}</td>
                                                <td >{el.message}</td>
                                                <td>{
                                                
                                                 (() => {

                                                     console.log("status",el)
                                                     
                                                     if(el.Status == 0) {
                                                        return <span className="text-info">Not Confirmed yet</span>
                                                     }else if(el.Status == 1) {
                                                        return <span className="text-success">Confirmed</span>
                                                     }else if(el.Status == 2) {
                                                        return <span className="text-danger">Cancelled</span>
                                                     }
                                                 })()
                                                }</td>

                                                <td>{el.PostingDate}</td>
                                                <td>
                                                    <a className="ml-2" href="#" onClick={
                                                        () => this.confirmBooking(el.id)
                                                        }>Confirm</a>

                                                    <a className="ml-2" href="#" onClick={
                                                        () => this.cancelBooking(el.id)
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
        getBooking : () => dispatch(getBookingList()),
        confirmBooking : (bookingid) => dispatch(confirmBooking(bookingid)),
        cancelBooking : (bookingid) => dispatch(cancelBooking(bookingid)),
    }
}

export default connect(mapStateToProps,dispatchStateToProps)(BookingList);