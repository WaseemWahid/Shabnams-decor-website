import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.css'

const Footer = () => {
    return (
        <section id='contact'>
            <div className='app__footer app__flex'>
                {/* include google number and email fill footer with useful information and also ask client to specify what is needed here. */}
                {/* Add a mini about section that explains the begining of shabnams decor */}
                {/* 3 columns  */}
                <h1 className='head-text'>About Us</h1>
                <p>Shabnam's decor was started in 2021...</p>
            </div>
            <div className='app__footer-items'>
                    Follow Us!
                </div>
        </section>
    )
}

export default MotionWrap(Footer, 'app__footer');