import React, { Component } from "react";
import ProjectButton from './ProjectButton/ProjectButton';
import classes from "./ThanxBox.css";


const ThanxBox = (props) => {
  return (
        <div className="ThanxBox">
            <div className="ThanxBox__container">
                <div className="project-button">
                    <img src={require('../../imgs/icons/Project-Prev.svg')}/>
                    <ProjectButton text="Previous Project" 
                                to={"/" + props.toPrev}
                    />
                </div>
                
                <div class="thank-you">Thank You!</div> 

                <div className="project-button">
                    <ProjectButton text="Next Project"
                                to={"/" + props.toNext} 
                    />
                    <img src={require('../../imgs/icons/Project-Next.svg')}/>
                </div>    
            </div>

          
            {props.children}
            

        </div>
    );
  
}

export default ThanxBox;
