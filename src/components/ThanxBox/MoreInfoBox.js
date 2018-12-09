import React, { Component } from "react";
import ProjectButton from './ProjectButton/ProjectButton';
import classes from "./MoreInfoBox.css";

const MoreInfoBox = (props) => {
  return (
        <div className="MoreInfoBox">
            <div className="MoreInfoBox__container">
                
                <ProjectButton text="Download CV" 
                               isHref="./files/CV.pdf"/>
                
                <div class="more-info">For more info</div> 

                <ProjectButton text="Connect on LinkedIn"
                               isHref="https://www.linkedin.com/in/korytchenko/" 
                />
            </div>

            <div className="MoreInfoBox__container">
                <div className="button-center">
                    <ProjectButton text="Say Hello"
                            isHref="mailto:denis@korytchenko.com?subject=Hi%20Denis!" 
                    />
                </div>
            </div>    
        </div>
    );
  
}

export default MoreInfoBox;
