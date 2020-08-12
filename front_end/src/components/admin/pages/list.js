import React from "react";
import { Editor } from '@tinymce/tinymce-react';

class PagesForm extends React.Component {

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
                        <div className="col-md-6">
                            <label>Select Pages</label>
                        </div>

                        <div className="col-md-6">
                            <select className="form-control">
                                <option value="">Select One</option>
                                <option value="">Terms and conditions</option>
                                <option value="">Privacy and policy</option>
                                <option value="">About us</option>
                                <option value="">Faq</option>
                            </select>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-6">
                            <label>Selected page</label>
                        </div>

                        <div className="col-md-6">
                             <label>Terms and conditions</label>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-6">
                            <label>Page Details</label>
                        </div>

                        <div className="col-md-6">
                            <Editor
                                initialValue="<P align=justify><FONT size=2><STRONG><FONT color=#990000>(1) ACCEPTANCE OF TERMS</FONT><BR><BR></STRONG>Welcome to Yahoo! India. 1Yahoo Web Services India Private Limited Yahoo, we or us as the case may be) provides the Service (defined below) to you, subject to the following Terms of Service (TOS), which may be updated by us from time to time without notice to you. You can review the most current version of the TOS at any time at: <A href='http://in.docs.yahoo.com/info/terms/'>http://in.docs.yahoo.com/info/terms/</A>. In addition, when using particular Yahoo services or third party services, you and Yahoo shall be subject to any posted guidelines or rules applicable to such services which may be posted from time to time. All such guidelines or rules, which maybe subject to change, are hereby incorporated by reference into the TOS. In most cases the guides and rules are specific to a particular part of the Service and will assist you in applying the TOS to that part, but to the extent of any inconsistency between the TOS and any guide or rule, the TOS will prevail. We may also offer other services from time to time that are governed by different Terms of Services, in which case the TOS do not apply to such other services if and to the extent expressly excluded by such different Terms of Services. Yahoo also may offer other services from time to time that are governed by different Terms of Services. These TOS do not apply to such other services that are governed by different Terms of Service. </FONT></P><P align=justify><FONT size=2>Welcome to Yahoo! India. Yahoo Web Services India Private Limited Yahoo
                                , we or us as the case may be) provides the Service (defined below) to you, subject to the following Terms of Service (TOS), which may be updated by us from time to time without notice to you. You can review the most current version of the TOS at any time at: </FONT><A href='http://in.docs.yahoo.com/info/terms/'><FONT size=2>http://in.docs.yahoo.com/info/terms/</FONT></A><FONT size=2>. In addition, when using particular Yahoo services or third party services, you and Yahoo shall be subject to any posted guidelines or rules applicable to such services which may be posted from time to time. All such guidelines or rules, which maybe subject to change, are hereby incorporated by reference into the TOS. In most cases the guides and rules are specific to a particular part of the Service and will assist you in applying the TOS to that part, but to the extent of any inconsistency between the TOS and any guide or rule, the TOS will prevail. We may also offer other services from time to time that are governed by different Terms of Services, in which case the TOS do not apply to such other services if and to the extent expressly excluded by such different Terms of Services. Yahoo also may offer other services from time to time that are governed by different Terms of Services. These TOS do not apply to such other services that are governed by different Terms of Service. </FONT></P><P align=justify><FONT size=2>Welcome to Yahoo! India. Yahoo Web Services India Private Limited Yahoo, we or us as the case may be) provides the Service (defined below) to you, subject to the following Terms of Service (TOS), which may be updated by us from time to time without notice to you. You can review the most current version of the TOS at any time at: </FONT><A href='http://in.docs.yahoo.com/info/terms/'><FONT size=2>http://in.docs.yahoo.com/info/terms/</FONT></A><FONT size=2>. In addition, when using particular Yahoo services or third party services, you and Yahoo shall be subject to any posted guidelines or rules applicable to such services which may be posted from time to time. All such guidelines or rules, which maybe subject to change, are hereby incorporated by reference into the TOS. In most cases the guides and rules are specific to a particular part of the Service and will assist you in applying the TOS to that part, but to the extent of any inconsistency between the TOS and any guide or rule, the TOS will prevail. We may also offer other services from time to time that are governed by different Terms of Services, in which case the TOS do not apply to such other services if and to the extent expressly excluded by such different Terms of Services. Yahoo also may offer other services from time to time that are governed by different Terms of Services. These TOS do not apply to such other services that are governed by different Terms of Service. </FONT></P>"
                                init={{
                                height: 500,
                                menubar: false,
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
                        </div>
                    </div>
                </div>
                </div>

            </div>
        )
    }
}


export default PagesForm;