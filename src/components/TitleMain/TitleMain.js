import React, { Component } from "react";
import classes from "./TitleMain.css";

const TitleMain = (props) => {

  let clName = "TitleMain "+ props.classColor;

  return (
        <div className={clName}>

          <div className="title_in">
            <h1>{props.title1}</h1>
          </div>
          <h3>{props.subTitle}</h3>
          
          {props.children}
        </div>
    );
  
}

export default TitleMain;
