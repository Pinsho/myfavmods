import React, { Component } from 'react';
import logorf2 from '../img/rfactor2.png';
import { Rfactor2CarsGrid } from '../components/Rfactor2CarsGrid';
import { Rfactor2TracksGrid } from '../components/Rfactor2TracksGrid';
import { Rfactor2OtherGrid } from '../components/Rfactor2OtherGrid';

export default class Rfactor2 extends Component{
    render() {
        return (
            <div>
                <div className='sectionHeader'>
                    <div className='wrapper'>
                        <img src={logorf2} height={64} alt="rFactor 2"/>
                        <span className='long title'>rFactor 2</span>
                    </div>
                    <div id="linksContainer">
                        <div className='links'>
                            <span><a href="#cars">Cars</a></span>
                            <span><a href="#tracks">Tracks</a></span>
                            <span><a href="#other">Other</a></span>
                        </div>
                    </div>
                </div>
                <Rfactor2CarsGrid/>
                <Rfactor2TracksGrid/>
                <Rfactor2OtherGrid/>
            </div>
            
        );
    }
}