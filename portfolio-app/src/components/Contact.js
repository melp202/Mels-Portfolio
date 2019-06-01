import React, { Component } from 'react';
import '../App.css'

class Contact extends Component {
    render() {
        return (
            <div className="contact-container" id='contact'>
                {/* Contact Form */}
                <form className="form-container2">
                    <h2 className="contact-title">Contact Me!</h2>
                    <label className="contact-label">Email</label>
                    <input className="contact-input" name="email" type="text"/>
                    <label className="contact-label">Subject</label>
                    <input className="contact-input" name="subject" type="text"/>
                    <label className="contact-label">Message</label>
                    <textarea name="message" id="" cols="30" rows="10" className="contact-input"></textarea>
                    <input value='Submit' type='submit' id="contact-button"/>
                </form>
            </div>
        );
    }
}

export default Contact;