import React, { Component } from 'react';
import logodcs from '../../img/dcs.png';
import logomsfs from '../../img/msfs2020.png';
import logoac from '../../img/ac.png';
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='category'>
                    <div className='categoryContainer'>
                        <div className='homeSection'><i className='bx bxs-plane-alt'></i><span>FLIGHT SIM GAMES</span></div>
                        <ul className='homeGrid'>
                            <div className='wrapper'>
                                <Link to="/myfavmods/dcs"><img src={logodcs} height={64} alt="DCS World"/></Link>
                                <span className='long'><Link to="/myfavmods/dcs">Digital Combat Simulator World</Link></span>
                            </div>
                            <div className='wrapper'>
                                <Link to="/myfavmods/msfs2020"><img src={logomsfs} height={64} alt="Microsoft Flight Simulator 2020"/></Link>
                                <span className='long'><Link to="/myfavmods/msfs2020">Microsoft Flight Simulator</Link></span>
                            </div>
                        </ul>
                    </div>
                    <div className='categoryContainer'>
                        <div className='homeSection'><i className='bx bxs-car' ></i><span>MOTOR SIM GAMES</span></div>
                        <ul className='homeGrid'>
                            <div className='wrapper'>
                                <Link to="/myfavmods/assettocorsa"><img src={logoac} height={64} alt="Assetto Corsa"/></Link>
                                <span className='long'><Link to="/myfavmods/assettocorsa">Assetto Corsa</Link></span>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}