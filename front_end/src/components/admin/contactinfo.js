import React from "react";
import axios from "axios";

class Contactinfo extends React.Component {

    constructor() {
        super();
        this.state = {
            address : '',
            email : '',
            contact : ''
        };

        this.changeInput = this.changeInput.bind(this);
        this.submit = this.submit.bind(this);

    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/contact/info')
        .then((res) => {
            let data = res.data;

            this.setState({
                address : data.Address,
                email :  data.EmailId,
                contact : data.ContactNo
            });
        })
    }


    changeInput(el) {
        this.setState({
            [el.target.name] : el.target.value
        })
    }

    submit() {

        let formdata = {
            address : this.state.address,
            email : this.state.email,
            contact : this.state.contact
        };


        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/contact/update',
            data: formdata,
            // headers: {'Content-Type': 'multipart/form-data' }
            })
            .then( (response) => {
                let data = response.data;

                this.setState({
                    address : data.Address,
                    email :  data.EmailId,
                    contact : data.ContactNo
                });
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

    }

    render() {
        return(

            <div>
                <h3>Update Contact Info</h3>
                <hr />
                <div >
                    <div className="form-group">
                        <label for="exampleInputEmail1">Address</label>
                        <input type="text" className="form-control" name="address" value={this.state.address} placeholder="Enter address" onChange={this.changeInput} />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Email Id</label>
                        <input type="text" className="form-control" name="email" value={this.state.email} placeholder="Enter email" onChange={this.changeInput} />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Contact Number</label>
                        <input type="text" className="form-control" name="contact" value={this.state.contact} placeholder="Enter contact" onChange={this.changeInput} />
                    </div>
                    <button type="submit" onClick={this.submit} className="btn btn-primary">Submit</button>
                </div>
            </div>
        )

    }
}


export default Contactinfo;