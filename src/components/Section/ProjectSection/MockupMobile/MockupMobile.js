import React, { Component } from "react";
import classes from "./MockupMobile.css";

const MockupMobile = (props) => {

    let smallL = require(`../../../../imgs/${props.imgNameLeft + "-p-500.png"}`);
    let largeL = require(`../../../../imgs/${props.imgNameLeft + ".png"}`);
    let smallR = require(`../../../../imgs/${props.imgNameRight + "-p-500.png"}`);
    let largeR = require(`../../../../imgs/${props.imgNameRight + ".png"}`);

  return (
        <div className="MockupMobile">

            <div className="mobile-mockups-container">
                        <div className="mobile-mockup">
                            <img src={smallL} 
                                    srcSet={`${smallL} 500w, ${largeL} 770w`} 
                                    width="385" 
                                    alt={smallL} 
                            /> 

                            <div class="note-text mobile-os">{props.leftText}</div>
                        </div>

                        <div className="mobile-title">
                            <div class="dashed-line"/>
                            <div class="note-text mobile-title">{props.title}</div>
                            <div class="dashed-line"/>
                        </div>

                        <div className="mobile-mockup">
                            <img src={smallR} 
                                    srcSet={`${smallR} 500w, ${largeR} 770w`} 
                                    width="385" 
                                    alt={smallR} 
                            /> 

                            <div class="note-text mobile-os">{props.rightText}</div>
                        </div>
                    </div>

                    <div class="dashed-line-horizontal"/>
         
        </div>
    );
  
}

export default MockupMobile;
