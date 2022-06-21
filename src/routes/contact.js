import React from 'react'
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import Introimg from '../components/intro-section/introimg';
import img from '../components/assets/intro3.jpg';
import ContactForm from '../components/ContactForm/contactForm';


const Contact = () => {
  return (
    <div>
     <Navbar/>
     <Introimg image={img} heading="Contact" text="Chat me up, Lets talk."/>
     <ContactForm/>
     <Footer/>
    </div>
  )
}

export default Contact