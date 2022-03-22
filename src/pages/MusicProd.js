import React, { Component } from 'react';
import logodaw from '../img/daw.png';
import { MusicDawGrid } from '../components/MusicDawGrid';
import { MusicVstGrid } from '../components/MusicVstGrid';
import { MusicSamplesGrid } from '../components/MusicSamplesGrid';

export default class MusicProd extends Component{
    render() {
        return (
            <div>
                <div className='sectionHeader'>
                    <div className='wrapper'>
                        <img src={logodaw} height={64} alt="Music Production"/>
                        <span className='long title'>Music Production</span>
                    </div>
                    <div id="linksContainer">
                        <div className='links'>
                            <span><a href="#daws">DAWs</a></span>
                            <span><a href="#vsts">VSTs</a></span>
                            <span><a href="#samples">Samples</a></span>
                        </div>
                    </div>
                </div>
                <MusicDawGrid/>
                <MusicVstGrid/>
                <MusicSamplesGrid/>
            </div>
        );
    }
}