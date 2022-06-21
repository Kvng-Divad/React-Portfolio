import "./workCard.css"

import React from 'react'
import WorkCard from "./workCard";
import WorkData from "./workData";

const Work = () => {
  return (
    <div className="wrok-container">
        <h1 className="project-heading">
            Projects
        </h1>
        <div className="project-container">
            {WorkData.map((val, ind) => {
                return(
                <WorkCard 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                />
                )
            })}
        </div>
    </div>
  )
}

export default Work;