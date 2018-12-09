import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Footer.css";



const Footer = (props) => {
  return (
    <div className="Footer">
        <div className="Footer__container">
          <div className="brand">
            <NavLink className="brand_nav"
                to="/"
                exact={false}
            >
                <img src={require('../../imgs/icons/logo-footer.svg')} />
            </NavLink> 
            <div class="brand_name">
              <div class="footer-name">Denis Korytchenko</div>
              <div class="footer-subtitle">Product Designer</div>
            </div>

          </div>

          <div className="info">
                <div class="footer-info-block">
                  <div class="footer-title">
                    Say Hello
                  </div>
                  
                  <a href="mailto:denis@korytchenko.com?subject=Hey%20Denis!" class="footer-link">denis@korytchenko.com</a>

                </div>
                  
                <div class="footer-info-block">
                  <div class="footer-title">
                    Connect
                  </div>
                  
                  <a href="https://www.linkedin.com/in/korytchenko/" target="_blank" class="footer-link">Linkedin</a>

                </div>
                
                <div class="footer-info-block">
                    <div><strong class="copyright">Copyright © 2018 Denis Korytchenko</strong></div>
                </div>
          </div>

          {props.children}  
        </div>
    </div>
  )
}
      

  
export default Footer;
