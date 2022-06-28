import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { images } from '../../constants'
import './Footer.css'

const Footer = () => {
    return (
        <section id='contact'>
            <div className='app__footer'>
                {/* Contact from under here? */}
                <div className='app__footer-links'>
                    <div className='app__footer-links_phone'>
                        <h1 className='app__footer-headtext'>Contact Us</h1>
                        <p className='p-text'>+1 888-222-4444</p>
                        <p className='p-text'>shabnamedecor@shabnamdecor.com</p>
                    </div>
                    
                    <div className='app__footer-links_logo'>
                        <img src={images.testLogo} alt='footer-logo'></img>
                        <p className='p-text'>"We can put a quote here"</p>
                        <div className='app__footer-links_icons'>
                            <FaFacebookF />
                            <BsInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MotionWrap(Footer, 'app__footer');