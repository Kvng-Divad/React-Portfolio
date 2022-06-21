import "./introimg.css"

import React, { Component } from 'react'


class Introimg extends Component {
  render (){
  return (
    <div className="hero">

        <div className="intro">
          <img className="intro-img" src={this.props.image} alt="introimg" />
        </div>
   
        
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
        
    </div>

  )
  }
}


export default  Introimg;