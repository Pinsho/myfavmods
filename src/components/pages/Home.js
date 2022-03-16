import React, { Component } from 'react';
import logodcs from '../../img/dcs.png';

export default class Contact extends Component {
    render() {
        return (
            <div className='home'>
                <h4>At the moment, you can try the following categories (more to be added soon)</h4>
                <div className='sectionHome'>
                    <div className="imgLogo">
                        <a href="/myfavmods/dcs"><img src={logodcs} height={64} alt="DCS World"/></a>
                    </div>
                    <div className='homeTitle'>
                        <h5><a href="/myfavmods/dcs">Digital Combat Simulator World</a></h5>
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
