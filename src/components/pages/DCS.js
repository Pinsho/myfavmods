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
                    <div className='wrapper'>
                        <img src={logodcs} height={64} alt="DCS World"/>
                        <span className='long title'>Digital Combat Simulator World</span>
                    </div>
                </div>
                <DCSModsGrid />
                <DCSMissionsGrid /> 
                <DCSOtherGrid />
            </div>
            
        );
    }
}