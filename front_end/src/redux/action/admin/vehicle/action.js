import { GET_VEHICLE ,ADD_VEHICLE } from "./actiontype";
import axios from "axios";


export const addVehicle = (vehicle,ownProps) => {
    return (dispatch) => {

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/vehicle/save',
            data: vehicle,
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(function (response) {

                dispatch({ type: GET_VEHICLE, payload:  response.data });
                ownProps.history.push('/admin/vehicle/manage');
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });


    }
}

export const getVehicle = () => {

    return (dispatch) => {
        return axios.get("http://127.0.0.1:8000/api/vehicle/list")
                    .then(res => {
                        dispatch({ type: GET_VEHICLE, payload:  res.data });
                    });
    }
}

