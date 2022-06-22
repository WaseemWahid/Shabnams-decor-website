import React from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'

const Testimonial = () => {
    return (
        <section id='testimonial'>
            <div>
                {/* Create schema for testimonials and get testimonials from client  */}
                Testimonial
            </div>
        </section>
    )
}

export default AppWrap(
    MotionWrap(Testimonial, 'app__testimonial'),
    'testimonial',
    'app__primarybg',
); 

