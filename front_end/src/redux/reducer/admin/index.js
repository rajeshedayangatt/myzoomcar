import { combineReducers } from "redux";

import brandReducer from "./brand/brandReducer";
import vehicleReducer from "./vehicle/vehicleReducer";
import bookingReducer from "./booking/bookingReducer";
import testimonialReducer from "./testimonial/testimonialReducer";
import contactReducer from "./contact/contactReducer";
import reguserReducer from "./reguser/reguserReducer";


export default combineReducers({ 
    brand : brandReducer ,
    vehicle : vehicleReducer,
    booking : bookingReducer,
    testimonial : testimonialReducer,
    contact : contactReducer,
    reguser : reguserReducer
});