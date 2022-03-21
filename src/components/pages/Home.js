import React, { Component } from 'react';
import logodcs from '../../img/dcs.png';
import logomsfs from '../../img/msfs2020.png';
import logoac from '../../img/ac.png';
import logorf2 from '../../img/rfactor2.png';
import logodaw from '../../img/daw.png';
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='category'>
                    <div className='categoryContainer'>
                        <div className='homeSection'><i className='bx bxs-plane-alt'></i><span>FLIGHT SIMULATION</span></div>
                        <ul className='homeGrid'>
                            <div className='wrapper'>
                                <Link to="/dcs"><img src={logodcs} height={64} alt="DCS World"/></Link>
                                <span className='long'><Link to="/dcs">Digital Combat Simulator World</Link></span>
                            </div>
                            <div className='wrapper'>
                                <Link to="/msfs2020"><img src={logomsfs} height={64} alt="Microsoft Flight Simulator 2020"/></Link>
                                <span className='long'><Link to="/msfs2020">Microsoft Flight Simulator</Link></span>
                            </div>
                        </ul>
                    </div>
                    <div className='categoryContainer'>
                        <div className='homeSection'><i className='bx bxs-car' ></i><span>MOTOR SIMULATION</span></div>
                        <ul className='homeGrid'>
                            <div className='wrapper'>
                                <Link to="/assettocorsa"><img src={logoac} height={64} alt="Assetto Corsa"/></Link>
                                <span className='long'><Link to="/assettocorsa">Assetto Corsa</Link></span>
                            </div>
                            <div className='wrapper'>
                                <Link to="/rfactor2"><img src={logorf2} height={64} alt="rFactor 2"/></Link>
                                <span className='long'><Link to="/rfactor2">rFactor 2</Link></span>
                            </div>
                        </ul>
                    </div>
                    <div className='categoryContainer'>
                        <div className='homeSection'><i className='bx bxs-music' ></i><span>MUSIC</span></div>
                        <ul className='homeGrid'>
                            <div className='wrapper'>
                                <Link to="/musicproduction"><img src={logodaw} height={64} alt="Music Production"/></Link>
                                <span className='long'><Link to="/musicproduction">Music Production</Link></span>
                            </div>
                            {/* <div className='wrapper'>
                                <Link to="/vst"><img src={logovst} height={64} alt="VSTs"/></Link>
                                <span className='long'><Link to="/vst">VSTs</Link></span>
                            </div>
                            <div className='wrapper'>
                                <Link to="/samples"><img src={logosamples} height={64} alt="Samples"/></Link>
                                <span className='long'><Link to="/samples">Samples</Link></span>
                            </div> */}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}