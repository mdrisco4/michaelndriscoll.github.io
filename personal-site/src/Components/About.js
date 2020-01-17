import React, { Component } from "react";
import '../CSS/About.css';

class About extends Component {
    
    render() {

    const About = (
    <div className='About'>
        <img src="../Pics/photo.jpg" alt='me'></img>
        <div>About</div>
    </div>
    )
    return (
        <div>
            {About}
        </div>
    );
    }

}

export default About;