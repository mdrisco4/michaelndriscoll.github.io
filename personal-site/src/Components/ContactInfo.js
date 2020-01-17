import React, { Component } from "react";
import '../CSS/ContactInfo.css';

class ContactInfo extends Component {
    
    render() {

    const ContactInfo = (
    <div className='contact-info'>
        <h2>Contact</h2>
        <h4>LinkedIn</h4>
        <h4>Email</h4>
        <h4>Phone</h4>
        <h4>Other</h4>
    </div>
    )
    return (
        <div>
            {ContactInfo}
        </div>
    );
    }

}

export default ContactInfo;