import React, { Component } from 'react';
import logodcs from '../../img/dcs.png';
import { Link } from "react-router-dom";

export default class Contact extends Component {
    render() {
        return (
            <div className='home'>
                <h4>At the moment, you can try the following categories (more to be added soon)</h4>
                <div className='sectionHome'>
                    <div className="imgLogo">
                        <Link to="/myfavmods/dcs"><img src={logodcs} height={64} alt="DCS World"/></Link>
                    </div>
                    <div className='homeTitle'>
                        <Link to="/myfavmods/dcs"><h5>Digital Combat Simulator World</h5></Link>
                    </div>
                </div>
                {/* <div className='homeFooter'>
                    <span>NOTE:</span>
                    <p>I will add more categories soon (Miscrosoft Flight Simulator 2020, Assetto Corsa, rFactor 2...)</p>
                </div> */}
            </div>
        )
    }
}
