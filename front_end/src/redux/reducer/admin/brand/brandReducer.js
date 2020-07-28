import { GET_BRAND } from "../../../action/admin/brand/actiontype";

const initialState = {
    brands : []
};

export default function brandReducer(state = initialState , action) {

        if(action.type === "GET_BRAND") {

            return Object.assign({}, state, { brands: action.payload });

        }else{
            return state;
        }

}