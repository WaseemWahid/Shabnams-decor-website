import React from 'react'
import emailjs from '@emailjs/browser'
import './ContactComponent.css'
import { useState, useRef } from 'react'


const Result = () => {
    return (
        <p>Your Message has been succesfully sent. I will contact you soon!</p>
    );
}

function ContactComponent (props) {
    const [result, showResult] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p84612l', 'template_y0quw1d', form.current, '6bXITzvghLCkifXzp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
            showResult(true)
    }


    return (
        <div className="contactme" >
            <div className="contactOverlay">
                <div className="container">
                    <div className="form">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="formWord">
                                <h2>Say Hello!</h2>
                                <span>Full Name</span>
                                <br />
                                <input className="input100" type="text" name="fullName" required />
                                <br />
                                <span>Phone Number</span>
                                <br />
                                <input className="input100" type="text" name="phone" required />
                                <br />
                                <span>Enter Email</span>
                                <br />
                                <input className="input100" type="text" name="email" required />
                                <br />
                            </div>
                            <div className="formWord">
                                <span>Message</span>
                                <br />
                                <textarea name="message" required></textarea>
                                <br />
                                <button>SUBMIT</button>

                                <div className="row">
                                    {result? <Result /> : null}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent