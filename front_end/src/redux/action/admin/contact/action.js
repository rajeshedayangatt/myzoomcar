import  { GET_CONTACT } from "./action_type";
import axios from "axios";


export function getContacts() {
    return function(dispatch) {
        return axios.get("http://127.0.0.1:8000/api/contactus/lists")
                    .then((res) => {
                        dispatch({
                            type : GET_CONTACT,
                            payload : res.data
                        })
                    })
    }
}

export function contactStatusUpdate(id) {
    return function (dispatch) {
        return axios.get("http://127.0.0.1:8000/api/contactus/read/"+id).then((res) => {
            dispatch({
                type : GET_CONTACT,
                payload : res.data
            })
        })
    }
}