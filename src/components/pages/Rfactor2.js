import React, { Component } from 'react';
import logomsfs from '../../img/rfactor2.png';
import Footer from '../../Footer';


export default class Rfactor2 extends Component{
    render() {
        return (
            <div>
                <div className='sectionHeader'>
                    <div className="imgLogo">
                        <img src={logomsfs} height={64} alt="rFactor 2"/>
                    </div>
                    <div className='sectionTitle'>
                        <h2>rFactor 2</h2>
                    </div>
                </div>
            </div>
            
        );
    }
}