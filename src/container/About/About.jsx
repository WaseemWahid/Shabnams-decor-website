import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import './About.css'
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client'


const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query)
            .then((data) => setAbouts(data))
    }, [])

    return (
            <div className='app__about-main'>
                <h1 className='head-text'>What we specialize at <span>Shabnam's Decor</span></h1>
                <div className='app__services'>
                    {abouts.map((about, index) => (
                        <motion.div
                            whileInView={{ opcaity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, type: 'tween' }}
                            className="app__profile-item"
                            key={about.title + index}
                        >
                            <img src={urlFor(about.imgUrl)} alt={about.title} />
                            <h2 style={{ marginTop: 20 }}>{about.title}</h2>
                            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg',
); 