import React from "react";
import {getTestimonial , activateTestimonial,inactivateTestimonial } from "../../../redux/action/admin/testimonial/action"
import { connect } from "react-redux"
class TestimonialList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTestimonial();
    }

    activate(test__id) {
        var confirm = window.confirm("Do you really want to Active");

        if(confirm){
            this.props.activateTestimonial(test__id);

        }
    }

    inactivate(test__id) {
        var confirm = window.confirm("Do you really want to Inactive");

        if(confirm){
            this.props.inactivateTestimonial(test__id);
        }

    }


    render() {
        return(

            <div>
                <h3>Manage Testimonials</h3>
                <div className="table-responsive" >
                    {
                        (this.props.testimonial.length > 0) ? (
                            <table className="table " id="booking_tbl">
                                <thead>
                                    <tr>
                                    <th style={{width:'5%'}} >#</th>
                                    <th  style={{width:'15%'}}>Name</th>
                                    <th  style={{width:'15%'}}>Email</th>
                                    <th  style={{width:'40%'}}>Testimonials</th>
                                    <th  style={{width:'10%'}}>Posting Date</th>
                                    <th   style={{width:'15%'}}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        this.props.testimonial.map( (el,index) => (
                                            <tr key={el.id}>
                                                <td>{index+1}</td>
                                                <td>{el.FullName}</td>
                                                <td>{el.UserEmail}</td>
                                                <td>{el.Testimonial}</td>
                                                <td>{el.PostingDate}</td>
                                              
                                                <td>
                                                    {
                                                        (el.status == 0) ? (
                                                            <a className="ml-2 text-danger" href="#" onClick={
                                                            () => this.activate(el.id)
                                                            }>In Active</a>
                                                        ) : (
                                                            <a className="ml-2 text-success" href="#" onClick={
                                                            () => this.inactivate(el.id)
                                                            }>Active</a>
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
    const testimonial = state.testimonial;

    return {
        testimonial : testimonial.testimonial_list
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getTestimonial : () => dispatch(getTestimonial()),
        activateTestimonial : (test_id) => dispatch(activateTestimonial(test_id)),
        inactivateTestimonial : (test_id) => dispatch(inactivateTestimonial(test_id)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TestimonialList);