import { combineReducers } from "redux";

import brandReducer from "./brand/brandReducer";
import vehicleReducer from "./vehicle/vehicleReducer";
import bookingReducer from "./booking/bookingReducer";


export default combineReducers({ 
    brand : brandReducer ,
    vehicle : vehicleReducer ,
    booking : bookingReducer
});