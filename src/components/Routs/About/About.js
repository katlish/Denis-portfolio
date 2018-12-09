import React, { Component } from "react";
import MetaTags from 'react-meta-tags';


import Header from "../../Header/Header";
import NavBar from '../../NavBar/NavBar';
import MoreInfoBox from '../../ThanxBox/MoreInfoBox'
import Footer from '../../Footer/Footer';
import Title from '../../Section/ProjectSection/Title/Title';

import classes from "./About.css";

class About extends Component {
    render() {
      return (
          <>
          <MetaTags>
            <title>About</title>
            <meta content="Hello, I&#x27;m Denis Korytchenko, a Product Designer. Focused on user experience and design on complex products. Currently working as a freelance with MyHeritage and Team8 cybersecurity start-up" name="description"/>
            <meta content="About" property="og:title"/>
            <meta content="Hello, I&#x27;m Denis Korytchenko, a Product Designer. Focused on user experience and design on complex products. Currently working as a freelance with MyHeritage and Team8 cybersecurity start-up" property="og:description"/>
            <meta content="../../../imgs/DenisKorytchenko.jpg" property="og:image"/>
            <meta content="summary" name="twitter:card"/>
          </MetaTags>

          <NavBar/>  
          <Header title1="Denis Korytchenko" 
                    subTitle="Product Designer" 
                    classColor="blueBig"
          />  
            <div class="photo-section"/>

            <div className="project-container">
              <Title text="Hello"/>

              <p className="paragraph">
                I’m Denis Korytchenko, a Product Designer, focused on user experience and design on complex products. Currently working as a freelance with MyHeritage and Team8 cybersecurity start-ups.
                <br/>
                <br/>
                My experience includes working on the products from scratch by collaborating with founders and clients to understand the business side of the products and the target audience. I also review existing products and provide UX report containing issues and suggestions for solving these issues.
                <br/>
                <br/>
                Outside of work I love to listen to and discover new music, go to concerts and travel with my girlfriend.
              </p>
            </div>

            <div className="project-container">
              <Title text="Experience"/>

              {/*TODO - parser for every job + bullet shape  */}
                <h3 class="project-h3 about"><strong>Korytchenko.com, Freelance Product Designer</strong></h3>
                <h4 class="heading-7 about"><strong class="bold-text">2018-Present</strong></h4>
                <p class="paragraph">Working as Freelance Product Designer and UX Consultant with MyHeritage, Team8 start-ups such as Hysolate, CURV, and Portshift</p>
                <div class="bullet-item">
                  <div class="small-bullet two"></div>
                  <p class="paragraph bullet">Collaborate with founders and clients to understand the business side of the products and the target audience</p>
                </div>
                <div class="bullet-item">
                  <div class="small-bullet"></div>
                  <p class="paragraph bullet">Create wireframes and user workflows for Web and Mobile applications </p>
                </div>
                <div class="bullet-item">
                  <div class="small-bullet"></div>
                  <p class="paragraph bullet">Design high fidelity mockups</p>
                </div>
                <div class="bullet-item">
                  <div class="small-bullet"></div>
                  <p class="paragraph bullet">Present designs to stakeholders</p>
                </div>
                <div class="bullet-item">
                  <div class="small-bullet"></div>
                  <p class="paragraph bullet">Work on a daily basis with the Product Teams as well as the Front End R&amp;D Teams (Web/Mobile/PC)</p>
                </div>
                <div class="bullet-item">
                  <div class="small-bullet"></div>
                  <p class="paragraph bullet">Make Design Systems for easier implementation and future use of the product</p>
                </div>

                <h3 class="project-h3 about"><strong>CTERA Networks, Product Designer</strong></h3>
                <h4 class="heading-7 about"><strong class="bold-text">2015-2018</strong></h4>
                <p class="paragraph">As a Product Designer in CTERA I had the following responsibilities

</p>
                <div class="bullet-item">
                  <div class="small-bullet two"></div>
                  <p class="paragraph bullet">Lead CTERA product design (Enterprise B2B applications): End User and Administrator Portal (Web Applications), Native Mobile Apps (iOS and Android), CTERA Agent (Windows and Mac OS)</p>
                </div>
                <div class="bullet-item">
                  <div class="small-bullet"></div>
                  <p class="paragraph bullet">Created wireframes and user flows </p>
                </div>
                <div class="bullet-item">
                  <div class="small-bullet"></div>
                  <p class="paragraph bullet">Design high fidelity mockups</p>
                </div>
                <div class="bullet-item">
                  <div class="small-bullet"></div>
                  <p class="paragraph bullet">Present designs to stakeholders</p>
                </div>
                <div class="bullet-item">
                  <div class="small-bullet"></div>
                  <p class="paragraph bullet">Collaborated on a daily basis with the Product Team, Front End R&D Teams, and QA</p>
                </div>
                <div class="bullet-item">
                  <div class="small-bullet"></div>
                  <p class="paragraph bullet">Worked in Agile software development environment</p>
                </div>
                <div class="bullet-item">
                  <div class="small-bullet"></div>
                  <p class="paragraph bullet">Provided graphic assets and guidelines to developers</p>
                </div>
                <div class="bullet-item">
                  <div class="small-bullet"></div>
                  <p class="paragraph bullet">Wrote requirement definitions</p>
                </div>


                <h3 class="project-h3 about"><strong>San Interactive, UX/UI Designer</strong></h3>
                <h4 class="heading-7 about"><strong class="bold-text">2012-2015</strong></h4>

                <div class="bullet-item">
                  <div class="small-bullet two"></div>
                  <p class="paragraph bullet">Built wireframes and interactive prototypes for web and mobile</p>
                </div>
                <div class="bullet-item">
                  <div class="small-bullet"></div>
                  <p class="paragraph bullet">Designed web and mobile applications </p>
                </div>
                <div class="bullet-item">
                  <div class="small-bullet"></div>
                  <p class="paragraph bullet">Made styleguides for developers</p>
                </div>
                <div class="bullet-item">
                  <div class="small-bullet"></div>
                  <p class="paragraph bullet">Motion design, worked on storyboards and created promo clips</p>
                </div>
                <div class="bullet-item">
                  <div class="small-bullet"></div>
                  <p class="paragraph bullet">Frontend web development (HTML and CSS)</p>
                </div>
                
              
            </div>

          

          <MoreInfoBox/>
          <Footer/> 
          </>
      );
    }
  }
  
  export default About;