import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper'

const About = () => {
    return (
        <div className='about__app'>
            <h1>About the Owner....</h1>
        </div>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__primarybg'
)