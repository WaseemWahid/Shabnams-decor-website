import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper'

const About = () => {
    return (
        <div className='about__app'>
            {/* Need to get information from client on what she wants to say here */}
            {/* also Will need a picture of client she is comfortable to upload  */}
            <h1 className='head-text'>About the Owner....</h1>
            <p className='p-text'>Shabnams decor was started in 2021 to give the people in the bay area a chance to enjoy a wonderful wedding
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellat possimus soluta nostrum doloribus distinctio velit minus nam ipsa eos magni voluptatem a, et at expedita ex culpa. Voluptatum, aliquid.
            </p>
        </div>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__primarybg'
)