import React from 'react'
import { MotionWrap } from '../../wrapper';
import { ContactMe } from '../../components';
import './Footer.css'

const Footer = () => {
    return (
        <section id='contact'>
            <div className='app__footer'>
                <div className='app__footer-title'>
                    <h1 className='head-text'>Contact Us</h1>
                    <h3 className='sub-text'>We'd love to Help!</h3>
                </div>
                <div className='app__footer-contact'>
                    <ContactMe />
                </div>
                <div className='app__footer-copyright'>
                    <p className='p-text'>Copyright @2022</p>
                </div>
            </div>
        </section>
    )
}

export default MotionWrap(Footer, 'app__footer');