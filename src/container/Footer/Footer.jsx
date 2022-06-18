import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper';

const Footer = () => {
    return (
        <div>
            {/* include google number and email fill footer with useful information and also ask client to specify what is needed here. */}
            Footer
        </div>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__primarybg',
);