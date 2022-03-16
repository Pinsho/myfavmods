import React, { Component } from 'react';
import logomsfs from '../../img/ac.png';
import { ACCarsGrid } from '../ACCarsGrid';
import { ACTracksGrid } from '../ACTracksGrid';
import { ACOtherGrid } from '../ACOtherGrid';


export default class AssettoCorsa extends Component{
    render() {
        return (
            <div>
                <div className='sectionHeader'>
                    <div className="imgLogo">
                        <img src={logomsfs} height={64} alt="Assetto Corsa"/>
                    </div>
                    <div className='sectionTitle'>
                        <h2>Assetto Corsa</h2>
                    </div>
                </div>
                <ACCarsGrid/>
                <ACTracksGrid/>
                <ACOtherGrid/>
            </div>
            
        );
    }
}