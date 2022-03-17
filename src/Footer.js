import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footerText'>
                    <span><i className='bx bxl-github' ></i>myfavmods by pinsho </span>
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
                    <span>© 2022</span>
                </div>
            </div>
        )
    }
}