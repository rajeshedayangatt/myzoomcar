
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