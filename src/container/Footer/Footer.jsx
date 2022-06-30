import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { images } from '../../constants'
import { ContactMe } from '../../components';
import './Footer.css'

const Footer = () => {
    return (
        <section id='contact'>
            <ContactMe />
            <div className='app__footer'>
                {/* Contact from under here? */}
            </div>
        </section>
    )
}

export default MotionWrap(Footer, 'app__footer');