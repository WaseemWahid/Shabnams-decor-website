import React from 'react'
import { motion } from 'framer-motion';
import './About.css'
import { AppWrap, MotionWrap } from '../../wrapper';


const About = () => {
    return (
        <div>
            <h2 className='head-text'>What we do at <span>Shabnam's Decor</span></h2>
            <div className='app__services'>
                
            </div>
        </div>
    )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');