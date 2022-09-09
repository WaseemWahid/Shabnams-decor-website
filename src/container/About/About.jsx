import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper'

const About = () => {
    return (
        <div className='about__app'>
            {/* Need to get information from client on what she wants to say here */}
            {/* also Will need a picture of client she is comfortable to upload  */}
            <h1 className='head-text'>About Me</h1>
            <p className='p-text'>Shabnams decor was started in 2021 to give the people in the bay area a chance to enjoy a wonderful wedding
                I started this company to fill a void in the market for custom wedding decor and to work with things i love flowers. WIth my many clients I have learned how to do some wonderful decorations and I have learned how to make a lot of custom pieces tghat my clients have requested 
                I always wanted to try new things this section is where Shabnam needs to add her own take on her business and how it all started 
            </p>
        </div>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__primarybg'
)