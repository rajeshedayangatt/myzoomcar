import React from "react";
import { connect } from "react-redux";
import { getContacts,contactStatusUpdate } from "../../../redux/action/admin/contact/action";
import '../../../components/common.css'


class ContactUs extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getContacts();
    }

    readQuery(id) {

        var confirm = window.confirm("Do you really want to read");

        if(confirm){
            this.props.contactStatusUpdate(id);
        }    
    
    }

    render() {
        return(
            <div>

              <h3>Manage Testimonials</h3>
                <div className="table-responsive" >
                    {
                        (this.props.contacts.length > 0) ? (
                            <table className="table " id="booking_tbl">
                                <thead>
                                    <tr>
                                    <th style={{width:'5%'}} >#</th>
                                    <th  style={{width:'15%'}}>Name</th>
                                    <th  style={{width:'15%'}}>Contact No</th>
                                    <th  style={{width:'40%'}}>Message</th>
                                    <th  style={{width:'10%'}}>Posting Date</th>
                                    <th   style={{width:'15%'}}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        this.props.contacts.map( (el,index) => (
                                            <tr key={el.id}>
                                                <td>{index+1}</td>
                                                <td>{el.name}</td>
                                                <td>{el.EmailId}</td>
                                                <td>{el.Message}</td>
                                                <td>{el.PostingDate}</td>
                                              
                                                <td>
                                                    {
                                                        (el.status == 0) ? (
                                                            <a className="ml-2 text-info" href="#" onClick={
                                                            () => this.readQuery(el.id)
                                                            }>Pending</a>
                                                        ) : (
                                                            <a className="ml-2 text-primary" href="#">Read</a>
                                                        )
                                                    }

                                                </td>
                                            </tr>
                                        ))
                                    }
                                
                                
                                </tbody>
                            </table>

                        ) : (
                            <h3>Loading</h3>
                        )
                    }
                    
                </div>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    const contacts = state.contact;
    return {
        contacts : contacts.contact_list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getContacts : () => dispatch(getContacts()),
        contactStatusUpdate : (id) => dispatch(contactStatusUpdate(id)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ContactUs);