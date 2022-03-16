import React, { Component } from 'react';
import { DCSModsGrid } from "../DCSModsGrid";
import { DCSMissionsGrid } from "../DCSMissionsGrid";
import { DCSOtherGrid } from "../DCSOtherGrid";
import logodcs from '../../img/dcs.png';


export default class DCS extends Component{
    render() {
        return (
            <div>
                <div className='sectionHeader'>
                    <div className="imgLogo">
                        <img src={logodcs} height={64} alt="DCS World"/>
                    </div>
                    <div className='sectionTitle'>
                        <h2>Digital Combat Simulator World</h2>
                    </div>
                </div>
                <DCSModsGrid />
                <DCSMissionsGrid /> 
                <DCSOtherGrid />
            </div>
            
        );
    }
}