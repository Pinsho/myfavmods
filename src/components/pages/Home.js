import React, { Component } from 'react';
import logodcs from '../../img/dcs.png';
import { Link } from "react-router-dom";

export default class Contact extends Component {
    render() {
        return (
            <div className='home'>
                <p>At the moment, you can try the following categories (more to be added soon)</p>
                <div class="wrapper">
                    <Link to="/myfavmods/dcs"><img src={logodcs} height={64} alt="DCS World"/></Link>
                    <span><Link to="/myfavmods/dcs">Digital Combat Simulator World</Link></span>
                </div>
            </div>
        )
    }
}
