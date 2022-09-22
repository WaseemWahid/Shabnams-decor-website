import React from 'react'
import { MotionWrap } from '../../wrapper';
import { ContactMe } from '../../components';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsFillHeartFill } from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
    return (
        <section id='contact'>
            <div className='app__footer'>
                <div className='app__footer-title'>
                    <h1 className='head-text'>Contact Us</h1>
                    <h3 className='sub-text'>We'd <BsFillHeartFill/> to Connect!</h3>
                </div>
                <div className='app__footer-contact'>
                    <ContactMe />
                </div>
                <div className='app__footer-social'>
                    <p className='p-text'>Follow us on Facebook and Instagram!</p>
                    <div className='app__footer-links'>
                        <div>
                            <a 
                            href="https://www.facebook.com/Shabnams-Decor-and-Events-107327561894446/" 
                            target="_blank" 
                            rel="noreferrer"
                            >
                                <FaFacebookF /> 
                            </a>
                        </div>
                        <div>
                            <a 
                            href="https://www.instagram.com/shabnams_decor/" 
                            target="_blank" 
                            rel="noreferrer"
                            >
                                <BsInstagram />
                            </a>
                        </div>
                        
                    </div>
                </div>
                <div className='app__footer-copyright'>
                    <p className='p-text'>
                        @2022 SHABNAMS DECOR AND EVENTS ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MotionWrap(Footer, 'app__footer');