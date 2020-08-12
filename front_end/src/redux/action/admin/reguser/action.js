import axios from "axios";
import {GET_REG_USERS} from "./action_type";

export  function getRegusers() {
    return function(dispatch) {
        return axios.get("http://127.0.0.1:8000/api/regusers/lists").then((res) => {
            dispatch({
                type : GET_REG_USERS,
                payload : res.data
            })
        })
    }
}