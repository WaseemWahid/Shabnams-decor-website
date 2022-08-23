import React from 'react'
import { MotionWrap } from '../../wrapper';
import { ContactMe } from '../../components';
import './Footer.css'

const Footer = () => {
    return (
        <section id='contact'>
            {/* <div className='app__footer-header'>
                <h1 className='head-text'>Follow Us On!</h1>
                <div className='app__footer-socials'>
                    <div>
                        <p className='p-text'>Instagram</p>
                    </div>
                    <div>
                        <p className='p-text'>Facebook</p>
                    </div>
                </div>
            </div> */}
            {/* this section needs to be finised by the end of the month! */}
            <div className='app__footer'>
                <ContactMe />
            </div>
            <div className='app__footer-history'>
                <h3 className='head-text'>A Little About <span>Us</span></h3>
                <p className='p-text'>
                    Shabnam's Decor was started by Shabnam Nazari who had a keen eye on design and .... 
                </p>
            </div>
        </section>
    )
}

export default MotionWrap(Footer, 'app__footer');