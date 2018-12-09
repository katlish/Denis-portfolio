import React from "react";
import { NavLink } from "react-router-dom";
import Dropdown from './Dropdown/Dropdown';
import classes from "./NavBar.css";


class NavBar extends React.Component {  

    

    render(){    
        return (
            <>
            <div className="NavBar">
                <div className="nav-bar-container">
                    <NavLink className="left"
                        to="/"
                        exact={false}
                    >
                        <img src={require('../../imgs/icons/logo-header.svg')} />
                    </NavLink> 
                
                
                    <div className="right">
                        <div className="nav-element">
                            <NavLink className="NavLink"
                                to="/"
                                exact={false}
                            >
                                Home
                            </NavLink>
                            <div className="separator"/>
                        </div> 

                        <div className="nav-element">
                            <NavLink className="NavLink"
                                to="/about"
                                exact={false}
                            >
                                About
                            </NavLink>
                            <div className="separator"/>
                        </div> 

                        <div className="nav-element">
                            <a className="NavLink" href="mailto:denis@korytchenko.com?subject=Hey%20Denis!" >Contact</a>
                            <div className="separator"/>
                        </div> 
                    </div>

                    
                </div>
            </div>

            <div className="dd-element">
                <Dropdown />
            </div>    
            
            </>
     )
    }
}
      

  
export default NavBar;

