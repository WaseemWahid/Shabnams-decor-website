import React from 'react'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'
import { images } from '../../constants'

import './Header.css'

const Header = () => {
    return (
        <div className='main'>
            <div className='overlay'></div>
            <video src={images.bgVideo} autoPlay loop muted />
            <motion.div 
            whileInView={{x: [-100, 0], opacity: [0, 1]}}
            transition={{ duration: 1.0 }}
            className="content">
                <h1>Decor</h1>
                <p>by Shabnam</p>
            </motion.div>
        </div>

    )
}

export default Header