import React from "react";
import { NavLink } from "react-router-dom";
import onClickOutside from "react-onclickoutside";

import classes from "./Dropdown.css";





class Dropdown extends React.Component {      
    
    constructor(props){
        super(props);

        this.state = {
            listOpen: false,
            classList: "slider close"
        }
    }

   

    toggleList(){
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }));

        if (this.state.listOpen) {
            this.setState({
                classList: "slider close"
            });  
        } else {
            this.setState({
                classList: "slider open"
            });  
        }
    }


    handleClickOutside(){
        this.setState({
            listOpen: false,
            classList: "slider close"
        });  
    }


    render(){
        const{listOpen} = this.state;
      
        return(
            <div className="dd-wrapper">
                <div className="dd-header">
                    <NavLink className="left"
                            to="/"
                            exact={false}
                        >
                        <img src={require('../../../imgs/icons/logo-header.svg')} />
                    </NavLink>
                    {listOpen
                        ? <div onClick={() => {
                            this.toggleList()
                           }}>
                            <i class="material-icons">close</i>
                          </div>

                        : <div onClick={() => {
                            this.toggleList()
                           }}>
                            <i class="material-icons">menu</i>
                          </div>
                    }
                </div>
                
                {
                    
                        <div className={this.state.classList}>
                            <div className="dd-list" onClick={() => {
                                this.toggleList()
                            }}>
                                <div className="nav-element">
                                    <NavLink className="NavLink white-elem"
                                        to="/"
                                        exact={false}
                                    >
                                        Home
                                    </NavLink>
                                    <div className="separator white-elem"/>
                                </div> 

                                <div className="nav-element">
                                    <NavLink className="NavLink white-elem"
                                        to="/about"
                                        exact={false}
                                    >
                                        About
                                    </NavLink>
                                    <div className="separator white-elem"/>
                                </div> 

                                <div className="nav-element">
                                    <a className="NavLink white-elem" href="mailto:denis@korytchenko.com?subject=Hey%20Denis!" >Contact</a>
                                    <div className="separator white-elem"/>
                                </div> 
                            </div>
                        </div>
                        
                }
            </div>
        )
    }
}    

  
export default onClickOutside(Dropdown);

