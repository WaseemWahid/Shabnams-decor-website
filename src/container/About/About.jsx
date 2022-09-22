import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper'
import { images } from '../../constants'
import './About.css'
const About = () => {
    return (
        <div className='about__app'>
            <h1 className ='head-text'>About <span>Us</span></h1>
            <div className='about__app-container'>
                <div className='about__app-image'>
                    <img 
                    src={images.aboutImg} 
                    alt='about-image' 
                    />
                </div>
                
                <div className='about__app-text'>
                    <p className ='about-text'>
                    Founded in 2021, Shabnam's Decor and Events is a Woman Minority owned Decor and Floral business. We specialize in Custom Event Decor,
                    Design and Florals to the clients needs. We truly have a passion for design and cannot wait to create something magical for your day. 
                    We have served Weddings, Engagements, Quinces, Anniversaries and Birthday events.
                    Contacts us today for a consultation!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__primarybg'
)