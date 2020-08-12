
import axios from "axios";
import {GET_TESTIMONIAL} from "./action_type"


export const getTestimonial = () => {

    return function (dispatch) {
        return axios.get("http://127.0.0.1:8000/api/testimonial/lists")
                    .then(res => {
                        dispatch({
                            type : GET_TESTIMONIAL,
                            payload : res.data
                        })
                    })
    }

}


export function activateTestimonial(testi_id) {

    return function(dispatch) {

        return axios.get("http://127.0.0.1:8000/api/testimonial/active/"+testi_id)
                    .then(res => {
                        dispatch({
                            type : GET_TESTIMONIAL,
                            payload : res.data
                        })
                    })
    }

}

export function inactivateTestimonial(testi_id) {

    return function(dispatch) {
        return axios.get("http://127.0.0.1:8000/api/testimonial/inactive/"+testi_id)
                    .then(res => {
                        dispatch({
                            type : GET_TESTIMONIAL,
                            payload : res.data
                        })
                    })
    }
}