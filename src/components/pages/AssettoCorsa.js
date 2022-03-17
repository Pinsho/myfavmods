import React, { Component } from 'react';
import logoac from '../../img/ac.png';
import { ACCarsGrid } from '../ACCarsGrid';
import { ACTracksGrid } from '../ACTracksGrid';
import { ACOtherGrid } from '../ACOtherGrid';


export default class AssettoCorsa extends Component{
    render() {
        return (
            <div>
                <div className='sectionHeader'>
                    <div className='wrapper'>
                        <img src={logoac} height={64} alt="Assetto Corsa"/>
                        <span className='long title'>Assetto Corsa</span>
                    </div>
                </div>
                <ACCarsGrid/>
                <ACTracksGrid/>
                <ACOtherGrid/>
            </div>
            
        );
    }
}