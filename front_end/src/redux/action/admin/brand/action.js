
import { GET_BRAND } from "./actiontype";
import axios from "axios";

const getbrandsurl = "http://127.0.0.1:8000/api/brand/lists";


export function getBrands() {

    return function(dispatch) {
        return axios.get(getbrandsurl)
            .then(res => {
            dispatch({ type: GET_BRAND, payload:  res.data });
        });
      }

}



export function addBrand(data,ownProps) {

    return function(dispatch) {
        axios.post("http://127.0.0.1:8000/api/brand/save",{
            brandname : data
        }).then((res) => {
            alert("successfully updated")
            dispatch({ type: GET_BRAND, payload:  res.data });
            ownProps.history.push('/admin/brand/manage');

        })

    }
}

export function updateBrand(data,ownProps) {

    return function(dispatch) {
        axios.post("http://127.0.0.1:8000/api/brand/update",{
            brandname : data.name,
            brandid : data.id
        }).then((res) => {
            dispatch({ type: GET_BRAND, payload:  res.data });
            ownProps.history.push('/admin/brand/manage');

        })

    }
}

