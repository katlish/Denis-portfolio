import React, { Component } from "react";
import classes from "./Title.css";

const Title = (props) => {

  return (
        <div className="Title">

            <h2 class="heading-6">{props.text}</h2>
            {props.isCentered ? <div class="section-separator centered"/> : <div class="section-separator"/>}
            
         
        </div>
    );
  
}

export default Title;
