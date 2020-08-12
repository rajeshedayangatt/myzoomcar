import { GET_TESTIMONIAL } from "../../../action/admin/testimonial/action_type";


const initialState = {
    testimonial_list: []
};

export default function testimonialReducer(state = initialState,action){

    if(action.type == GET_TESTIMONIAL){

        return  Object.assign({},state,{testimonial_list : action.payload})
        
    }else{
        return state;
    }
}