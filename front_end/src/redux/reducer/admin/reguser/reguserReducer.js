import { GET_REG_USERS } from "../../../action/admin/reguser/action_type";


const initialState = {
    regusers_list : []
}
export default function reguserReducer(state = initialState ,action) {

    if(action.type == GET_REG_USERS) {
        return Object.assign({},state,{regusers_list:action.payload})
    }else{
        return state;
    }
}