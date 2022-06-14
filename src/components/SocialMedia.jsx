import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'


const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://www.facebook.com/Shabnams-Decor-and-Events-107327561894446/" target="_blank" rel="noreferrer">
                    <FaFacebookF />
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/shabnams_decor/" target="_blank" rel="noreferrer">
                    <BsInstagram />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia