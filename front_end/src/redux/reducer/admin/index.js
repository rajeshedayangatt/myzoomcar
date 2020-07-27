import { combineReducers } from "redux";

import brandReducer from "./brand/brandReducer";

export default combineReducers({ 
    brand : brandReducer 
});