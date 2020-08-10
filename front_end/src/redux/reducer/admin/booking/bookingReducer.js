import { GET_BOOKINGS } from "../../../action/admin/booking/actiontype";
 

const initialState = {
    booking_list : []
}


export default function  bookingReducer (state = initialState , action) {
    if(action.type == GET_BOOKINGS) {
        return Object.assign({}, state , { booking_list : action.payload})
    }else{
        return state;
    }
}