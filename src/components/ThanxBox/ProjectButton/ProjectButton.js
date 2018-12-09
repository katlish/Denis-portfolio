import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import classes from "./ProjectButton.css";

const ProjectButton = (props) => {
   
    return (

            props.isHref ? 
                <a href={props.isHref} target="_blank" class="project-link">
                    {props.text}
                </a>

                :
                   
                <NavLink className="project-link"
                    to={props.to}
                    exact={true}
                >
                    {props.text}
                </NavLink> 
                    
    );
  
}

export default ProjectButton;
