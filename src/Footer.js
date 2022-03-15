import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footerText'>
                    <span>Copyright © 2022 myfavmods by Pinsho </span>
                    <span className='socials'>
                        <a href="https://instagram.com/pinsho" target="_blank" rel="noreferrer">
                            <i className='bx bxl-instagram instagram'></i>
                        </a>
                    </span>
                    <span className='socials'>
                        <a href="https://twitter.com/pinsho" target="_blank" rel="noreferrer">
                            <i className='bx bxl-twitter twitter'></i>
                        </a>
                    </span>
                </div>
                
            </div>
        )
    }
}