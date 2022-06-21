import React from 'react'
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import Introimg from '../components/intro-section/introimg';
import img from '../components/assets/intro.jpg';
import AboutContent from '../components/AboutContent/AboutContent';


const About = () => {
  return (
    <div>
      <Navbar/>
      <Introimg image={img} heading="About" text="Get to know me"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About