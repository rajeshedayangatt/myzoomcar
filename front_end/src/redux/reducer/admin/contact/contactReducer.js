import { GET_CONTACT } from '../../../action/admin/contact/action_type';


const initialState = {
    contact_list : []
}


export default function contactReducer(state = initialState , action ) {
    if(action.type == GET_CONTACT) {
        return Object.assign({},state,{contact_list : action.payload})
    }else{
        return state;
    }
}