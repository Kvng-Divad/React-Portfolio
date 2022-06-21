import React from 'react'

import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Introimg from '../components/intro-section/introimg';
import img from '../components/assets/intro2.jpg';
import PricingCard from '../components/p-cards/p-card';
import Work from '../components/works/work';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Introimg image={img} heading="Projects" text="some of my recent works."/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project;