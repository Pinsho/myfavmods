import React, { Component } from 'react';
import logomsfs from '../../img/msfs2020.png';
import { MSFSModsGrid } from '../MSFSModsGrid';
import { MSFSOtherGrid } from '../MSFSOtherGrid';


export default class MSFS2020 extends Component{
    render() {
        return (
            <div>
                <div className='sectionHeader'>
                    <div className='wrapper'>
                        <img src={logomsfs} height={64} alt="Miscrosoft Flight Simulator 2020"/>
                        <span className='long title'>Miscrosoft Flight Simulator 2020</span>
                    </div>
                    <div id="linksContainer">
                        <div className='links'>
                            <span><a href="#addons">Addons</a></span>
                            <span><a href="#other">Other</a></span>
                        </div>
                    </div>
                </div>
                <MSFSModsGrid />
                <MSFSOtherGrid />
            </div>
        );
    }
}