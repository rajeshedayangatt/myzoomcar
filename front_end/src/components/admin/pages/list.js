import React from "react";
import { Editor } from '@tinymce/tinymce-react';
import axios from "axios";

class PagesForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected_id : '',
            selected_page : '',
            page_content : ''
        };
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.contentChange = this.contentChange.bind(this);
    }

    handleEditorChange(el) {

        this.setState({
            page_content : el
        })

    }

    contentChange(el) {
        this.setState({
            selected_id : '',
            selected_page: '',
            page_content : ''
        });
       let id = el.target.value;
        axios.get("http://127.0.0.1:8000/api/page/"+id).then((res) => {

                let data = res.data;
                console.log(data)
                this.setState({
                    selected_id : data.id,
                    selected_page: data.PageName,
                    page_content : data.detail
                })
        });

    
    }

    submitForm()  {

        let formdata = {
            selected_page : this.state.selected_id,
            slected_page_content : this.state.page_content
        }

        this.setState({
            selected_id : '',
            selected_page: '',
            page_content : ''
        })

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/page/save',
            data: formdata,
            // headers: {'Content-Type': 'multipart/form-data' }
            })
            .then( (response) => {
                let data = response.data;
                this.setState({
                    selected_id : data.id,
                    selected_page: data.PageName,
                    page_content : data.detail
                })
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });


    }

    render() {
        return(
            <div>
                <h2>Manage Pages</h2>
                <div className="card">
                <div className="card-header">
                    Form Fields
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <label>Select Pages</label>
                        </div>

                        <div className="col-md-9">
                            <select className="form-control" onChange={this.contentChange}>
                                <option value="">Select One</option>
                                <option value="1">Terms and conditions</option>
                                <option value="2">Privacy and policy</option>
                                <option value="3">About us</option>
                                <option value="11">Faq</option>
                            </select>
                        </div>
                    </div>


                    <div className="row  mt-2">
                        <div className="col-md-3">
                            <label>Selected Page</label>
                        </div>

                        <div className="col-md-9">
                             <label>{this.state.selected_page}</label>
                        </div>
                    </div>


                    <div className="row mt-2">
                        <div className="col-md-3">
                            <label>Page Details</label>
                        </div>

                        <div className="col-md-9">
                        {
                            (this.state.page_content == "") ? (<div></div>) : (

                                <Editor
                    
                                    apiKey="uee7kt25lgaij5leibtwfwfhatuck6yjiclskgplidmyq1oi"

                                    initialValue={this.state.page_content}
                                    init={{
                                    height: 500,
                                    menubar: true,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar:
                                        'undo redo | formatselect | bold italic backcolor | \
                                        alignleft aligncenter alignright alignjustify | \
                                        bullist numlist outdent indent | removeformat | help'
                                    }}
                                    onEditorChange={this.handleEditorChange}
                                />

                            ) 
                        }

                        </div>
                    </div>


                    <div className="row mt-2">
                        <div className="col-md-3">
                        </div>

                        <div className="col-md-4">

                            <button className="btn btn-primary" onClick={this.submitForm}>Update</button>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        )
    }
}


export default PagesForm;