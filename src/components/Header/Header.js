import React, { Component } from "react";
import TitleMain from '../TitleMain/TitleMain';
import classes from "./Header.css";

const Header = (props) => {
  return (
        <div className="Header">

          <TitleMain 
            title1={props.title1} 
            title2={props.title2} 
            subTitle={props.subTitle}
            classColor={props.classColor}
          />

          {props.children}

          
        </div>
    );
  
}

export default Header;
