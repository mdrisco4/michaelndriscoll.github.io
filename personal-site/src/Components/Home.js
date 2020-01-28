import React, { Component } from "react";
import '../CSS/Home.css';

class Home extends Component {
    
    render() {

    const homePage = (
    <div className='Home'>
        <h3>Home</h3>
        {/* <nav>
            <ul>
                <li>Portfolio</li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav> */}
    </div>
    )
    return (
        <div>
            {homePage}
        </div>
    );
    }

}

export default Home;