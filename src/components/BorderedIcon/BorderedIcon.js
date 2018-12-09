import React from "react";
import classes from "./BorderedIcon.css";


const BorderedIcon = (props) => {
  
    let clName = "BorderedIcon "+ props.classColor;

    return (
    <div className={clName}>
        {props.text}
    </div>
  )
}
  
export default BorderedIcon;
