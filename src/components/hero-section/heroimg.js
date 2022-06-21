import "./heroimg.css";

import React from 'react'

import Heroimge from "../assets/heroimg.jpg";
import { Link } from "react-router-dom";


const Heroimg = () => {
  return (
    <div className="hero">
        <div className="layer">
            <img className="hero-img" src={Heroimge} alt="heroimg"/>
        </div>
   
        <div className="content">
              <p>Hi, i'm a freelance</p>
              <h1>React Developer.</h1>
              <div>
                  <Link to="/project" className="btn">projects</Link>
                  <Link to="/contact" className="btn btn-alt">contact</Link>
              </div>
        </div>

    </div>
  )
}

export default Heroimg;
