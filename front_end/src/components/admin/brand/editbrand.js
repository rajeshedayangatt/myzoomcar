import React , {useState , useEffect} from 'react';
import { connect } from "react-redux"
import {updateBrand} from "../../../redux/action/admin/brand/action";
import { useParams } from "react-router-dom";
import axios from "axios";


const EditBrand = (props) => {


    let { id } = useParams();

    const [brandName,setBrandName] = useState("");

    function submit(){
        props.updatebrand({ name : brandName , id : id})
    }

    function changeName(e) {
        setBrandName(e.target.value)
    }

    useEffect(() => {
      
        axios.get("http://127.0.0.1:8000/api/brand/list/"+id).then((res) => {
            setBrandName(res.data.BrandName)
        });
    },[]);

    return (
        <div>
            <h3>Edit Brand {id}</h3>
            <hr />
            <div >
                <div className="form-group">
                    <label for="exampleInputEmail1">Brand Name</label>
                    <input type="text" className="form-control" placeholder="Enter brand name" onChange={changeName} value={brandName} />
                </div>
                <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
            </div>
        </div>
    );
};

const mapDispatchToProps  = dispatch => {

    return {
        updatebrand : (data) => dispatch(updateBrand(data))
    }
}

const mapStateToProps = state => {
    const brandata = state.brandid;
    return {
        brand : brandata
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(EditBrand);