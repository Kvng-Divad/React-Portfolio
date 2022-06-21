import "./Contactform.css"

import React from 'react'

const ContactForm = () => {
  return (
    <div className="contact-form">
        <form className="form">
            <label>Your Name</label>
            <input type='text'></input>

            <label>Email</label>
            <input type='text'></input>

            <label>Subject</label>
            <input type='text'></input>

            <label>Message</label>
            <textarea rows="6" placeholder="Type your Message Here"/>

            <button type="submit" className="btn">submit</button>
        </form>
    </div>
  )
}

export default ContactForm