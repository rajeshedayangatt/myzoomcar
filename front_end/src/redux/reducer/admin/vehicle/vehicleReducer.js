import { GET_VEHICLE, ADD_VEHICLE } from "../../../action/admin/vehicle/actiontype";

const intialstate = {
    vehicle : []
}

const  vehicleReducer = (state = intialstate , action) => {

    if(action.type === GET_VEHICLE) {
        return Object.assign({}, state, { vehicle: action.payload });
    }else{
        return state;
    }
};

export default vehicleReducer;