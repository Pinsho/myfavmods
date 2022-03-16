import React, { Component } from 'react';
import logomsfs from '../../img/msfs2020.png';
import { MSFSModsGrid } from '../MSFSModsGrid';
import { MSFSOtherGrid } from '../MSFSOtherGrid';


export default class MSFS2020 extends Component{
    render() {
        return (
            <div>
                <div className='sectionHeader'>
                    <div className="imgLogo">
                        <img src={logomsfs} height={64} alt="Miscrosoft Flight Simulator 2020" />
                    </div>
                    <div className='sectionTitle'>
                        <h2>Miscrosoft Flight Simulator 2020</h2>
                    </div>
                </div>
                <MSFSModsGrid />
                <MSFSOtherGrid />
            </div>
        );
    }
}