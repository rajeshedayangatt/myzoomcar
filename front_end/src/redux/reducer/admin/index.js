import { combineReducers } from "redux";

import brandReducer from "./brand/brandReducer";
import vehicleReducer from "./vehicle/vehicleReducer";

export default combineReducers({ 
    brand : brandReducer ,
    vehicle : vehicleReducer
});