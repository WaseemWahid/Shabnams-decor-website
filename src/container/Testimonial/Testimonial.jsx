import React from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'

const Testimonial = () => {
    return (
        <div>
            {/* Create schema for testimonials and get testimonials from client  */}
            Testimonial
        </div>
    )
}

export default AppWrap(
    MotionWrap(Testimonial, 'app__testimonial'),
    'testimonial',
    'app__whitebg'
)