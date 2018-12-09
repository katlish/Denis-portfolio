import React from "react";
import classes from "./Section.css";

const Section = (props) => {
  return (
    <div className="Section">
         {props.children}  
    </div>
  )
}
      

  
export default Section;
