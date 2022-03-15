import React, { Component } from 'react';
import logomsfs from '../../img/msfs2020.png';
import Footer from '../../Footer';


export default class MSFS2020 extends Component{
    render() {
        return (
            <div>
                <div className='sectionHeader'>
                    <div className="imgLogo">
                        <a href="/msfs2020"><img src={logomsfs} height={64} alt="Miscrosoft Flight Simulator 2020" /></a>
                    </div>
                    <div className='sectionTitle'>
                        <h2>Miscrosoft Flight Simulator 2020</h2>
                    </div>
                </div>
            </div>
            
        );
    }
}