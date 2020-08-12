
import { GET_BOOKINGS } from "./actiontype";
import axios from "axios";

export const getBookingList = () => {
        return (dispatch) => {
            return axios.get("http://127.0.0.1:8000/api/booking/lists")
                        .then((response) => {
                            
                            dispatch({ type: GET_BOOKINGS, payload:  response.data });

                        });
        }
}



export const confirmBooking = (bookingid) => {

    return (dispatch) => {
        return axios.get("http://127.0.0.1:8000/api/booking/confirm/"+bookingid)
                       .then(res => {
                           dispatch({ type: GET_BOOKINGS, payload:  res.data });
                       });
    }
}



export const cancelBooking = (bookingid) => {

    return (dispatch) => {
        return axios.get("http://127.0.0.1:8000/api/booking/cancel/"+bookingid)
                       .then(res => {
                           dispatch({ type: GET_BOOKINGS, payload:  res.data });
                       });
    }
}