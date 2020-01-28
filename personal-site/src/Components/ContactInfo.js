import React, { Component } from "react";
import '../CSS/ContactInfo.css';

class ContactInfo extends Component {
    
    render() {

    const ContactInfo = (
    <div className='contact-info'>
        <h2 className='contact-title'>Contact</h2>
        <nav className='footer-contact-links'>
            <h4>LinkedIn</h4>
            <h4>Email</h4>
            <h4>Phone</h4>
            <h4>Other</h4>
        </nav>
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