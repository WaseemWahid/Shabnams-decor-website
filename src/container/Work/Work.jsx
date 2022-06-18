import React from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'

const Work = () => {
    return (
        <div>
            {/* Add instagram link and make it look like a instagram feed. Make sure images have a link to instagram! */}
            {/* Also create schema to make this section dynamic and can change featured images */}
            Work
        </div>
    )
}

export default AppWrap(
    MotionWrap(Work, 'app__works'),
    'work',
    'app__primarybg',
);