import React, { Component } from 'react';
import logoams2 from '../img/ams2.png';
import { AMS2ModsGrid } from '../components/AMS2ModsGrid';

export default class Automobilista2 extends Component{
    render() {
        return (
            <div>
                <div className='sectionHeader'>
                    <div className='wrapper'>
                        <img src={logoams2} height={64} alt="Automobilista 2"/>
                        <span className='long title'>Automobilista 2</span>
                    </div>
                    <div id="linksContainer">
                        <div className='links'>
                            <span><a href="#cars">Cars</a></span>
                            <span><a href="#tracks">Tracks</a></span>
                            <span><a href="#other">Other</a></span>
                        </div>
                    </div>
                </div>
                <AMS2ModsGrid/>
            </div>
            
        );
    }
}