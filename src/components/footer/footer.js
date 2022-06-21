import "./footer.css"

import React from 'react'
import  { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">

          <div className="left">
            <div className="location">
              <FaHome className="icon"/>
              <div>
                <p>123 Housing Estate, Lekki</p>
                <p>Lagos, Nigeria.</p>
              </div>
            </div>

            <div className="phone">
              <h4>
                <FaPhone className="icon"/>+234-814-523-9834
              </h4>
            </div>

            <div className="mail">
              <h4>
                <FaMailBulk className="icon"/>info@gmail.com
              </h4>
            </div>

          </div>

          <div className="right">
            <h4>
              About Me
            </h4>
            <div>
              <p>I am Donald Freeman, a React developer. I enjoy discussing and building new projects and challenges.</p>
            </div>
            <div className="social">
            <FaFacebook className="icon"/>
            <FaTwitter className="icon"/>
            <FaLinkedin className="icon"/>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Footer;