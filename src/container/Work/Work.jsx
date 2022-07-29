import React, { useState, useEffect } from 'react'
import { BsInstagram } from 'react-icons/bs';
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Work.css'

const Work = () => {
    const [work, setWork] = useState([]);

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
                <h2 className='head-text'>Look at our work on <span>Instagram!</span></h2>
                <p className='p-text'>Dont forget to follow to stay up to date on all the new work we have done</p>
            </div>
            <div className='app__work-item_container'>
                { work.map((work, index) => (
                    <div className='app__work-item' key={index} style={{background:`url(${urlFor(work.imgUrl)}) center no-repeat`, backgroundSize: "cover"}}>
                            <a className='app__work-item-link' href={work.instaLink} target="_blank" rel="noreferrer">
                                <div>
                                    <BsInstagram />
                                </div>
                            </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AppWrap(
    MotionWrap(Work, 'app__works'),
    'work',
    'app__primarybg',
);