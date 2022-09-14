import React from 'react'
import emailjs from '@emailjs/browser'
import './ContactComponent.css'
import { useState, useRef } from 'react'
import images from '../../constants/images'

import './ContactComponent.css'
const Result = () => {
    return (
        <p className='p-text'>Your Message has been succesfully sent. We will contact you soon!</p>
    );
}

function ContactComponent(props) {
    const [result, showResult] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p84612l', 'template_y0quw1d', form.current, process.env.EMAIL_JS_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        showResult(true)
    }


    return (
        <div>
            <div className="container">
                <div className="screen">
                    <div className="screen-header">
                        <div className="screen-header-left">
                            <div className="screen-header-button close"></div>
                            <div className="screen-header-button maximize"></div>
                            <div className="screen-header-button minimize"></div>
                        </div>
                        <div className="screen-header-right">
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                        </div>
                    </div>
                    <div className="screen-body">
                        <div className="screen-body-item left">
                            <div className="app-title">
                                <span>CONTACT US</span>
                            </div>
                            <div className='app-contact'>
                                <div className='app__contact-phone'>
                                    <a href='tel:+1 (650) 772-1902' className='p-text'><img src={images.phone} alt='phone'/><p>+1(650)772-1902</p></a>
                                </div>
                                <div className='app__contact-email'>
                                    <a href='mailto:shabnam@shabnamsdecorandevents.com' className='p-text'><img src={images.email} alt='email-icon'/><p>shabnam@shabnamsdecorandevents.com</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="screen-body-item">
                            <form className="app-form" form ref={form} onSubmit={sendEmail}>
                                <div className="app-form-group">
                                    <input className="app-form-control" type='text' name='fullName' placeholder='Full Name' required />
                                </div>
                                <div className="app-form-group">
                                    <input className="app-form-control" type="text" name="phone" placeholder='Phone Number' required />
                                </div>
                                <div className="app-form-group">
                                    <input className="app-form-control" type="text" name="email" placeholder='Email' required />
                                </div>
                                <div className="app-form-group message">
                                    <input className="app-form-control" name="message" placeholder='Message' required />
                                </div>
                                <div className="app-form-group buttons">
                                    <button className="app-form-button">SEND</button>
                                </div>
                                <div className="row">
                                    {result ? <Result /> : null}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent