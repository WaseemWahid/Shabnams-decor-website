import React, { useState } from 'react'
import { HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { IoIosRose, IoIosCloseCircle } from 'react-icons/io'
import { FcCloseUpMode } from 'react-icons/fc'

import './Navbar.css'

const Navbar = () => {
  const[toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <h4>Decor</h4>
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'testimonial', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link=${item}`}>
            <a href={`#${item}`}>{ item }</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <FcCloseUpMode onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <IoIosCloseCircle onClick={() => setToggle(false)} />
              <ul>
                {['home', 'about', 'work', 'testimonial', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
      </div>
    </nav>
  )
}

export default Navbar