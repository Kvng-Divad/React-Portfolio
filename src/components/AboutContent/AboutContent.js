import "./AboutContent.css";

import React from 'react'
import { Link } from "react-router-dom";
import top from "../assets/top.jpg";
import bottom from "../assets/bottom.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="about-container">
            <div className="about-left">
                <h1>Who Am I?</h1>
                <p>I am a React Developer. I develop responsive, interactive and secure websites for my clients via various Programing Languages.</p>
                <Link to="/contact" >
                    <button className="btn">Contact</button>
                </Link>
            </div>

            <div className="about-right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={top} className="img" alt="about"/>
                    </div>

                    <div className="img-stack bottom">
                        <img src={bottom} className="img" alt="about"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;