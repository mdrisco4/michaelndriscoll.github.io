import React, { Component } from "react";
import '../CSS/Portfolio.css';

class Portfolio extends Component {
    
    render() {

    const Portfolio = (
    <div className='Portfolio'>
        <h1 className='protfolio-title'>Portfolio</h1>
        <nav>
            <div>
                <h3>PROJECT</h3>
                <img src='' alt='project-1' className='project-pic'></img>
            </div>
            <div>
                <h3>PROJECT</h3>
                <img src='' alt='project-1' className='project-pic'></img>
            </div>
            <div>
                <h3>PROJECT</h3>
                <img src='' alt='project-1' className='project-pic'></img>
            </div>
            <div>
                <h3>PROJECT</h3>
                <img src='' alt='project-1' className='project-pic'></img>
            </div>
        </nav>
    </div>
    )
    return (
        <div>
            {Portfolio}
        </div>
    );
    }

}

export default Portfolio;