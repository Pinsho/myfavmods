import React, { Component } from 'react';
import logorf2 from '../../img/rfactor2.png';


export default class Rfactor2 extends Component{
    render() {
        return (
            <div>
                <div className='sectionHeader'>
                    <div className='wrapper'>
                        <img src={logorf2} height={64} alt="rFactor 2"/>
                        <span className='long title'>rFactor 2</span>
                    </div>
                </div>
            </div>
        );
    }
}