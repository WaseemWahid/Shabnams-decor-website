import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Work.css'

const Work = () => {
    const [work, setWork] = useState([])

    useEffect(() => {
        const query = '*[_type == "work"]';
        client.fetch(query)
            .then((data) => {
                setWork(data);
            })
    }, [])

    return (
        <div>
            <div className='app__work app__flex'>
                <h2 className='head-text'>Look at our work on Instagram!</h2>
                <p className='p-text'>Dont forget to follow to stay up to date on all the new work we have done</p>
            </div>
            {/* Should we add a grid of pictures on hover it will change opacity and show the instagram logo */}
        </div>
    )
}

export default AppWrap(
    MotionWrap(Work, 'app__works'),
    'work',
    'app__primarybg',
);