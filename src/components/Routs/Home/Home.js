import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MetaTags from 'react-meta-tags';
 

import Header from "../../Header/Header";
import NavBar from '../../NavBar/NavBar';
import BorderedIcon from '../../BorderedIcon/BorderedIcon';
import TitleMain from '../../TitleMain/TitleMain';
import Footer from '../../Footer/Footer';

import classes from './Home.css'

class Home extends Component {


    render() {
      
      return (
          <>
          <MetaTags>
            <title>Denis Korytchenko: Product Designer</title>
            <meta content="Product Designer focused on user experience and design of complex products. Currently working as a freelance with MyHeritage and Team8 cybersecurity start-ups" name="description"/>
            <meta content="Denis Korytchenko: Product Designer" property="og:title"/>
            <meta content="Product Designer focused on user experience and design of complex products. Currently working as a freelance with MyHeritage and Team8 cybersecurity start-ups" property="og:description"/>
            <meta content="../../../imgs/DenisKorytchenko.jpg" property="og:image"/>
            <meta content="summary" name="twitter:card"/>
          </MetaTags>

          <NavBar/>  
          <Header title1="Denis Korytchenko" 
                    subTitle="Product Designer" 
                    classColor="blueBig"
          />  


          <div className="portfolio-wrapper">
              <div className="portfolio-container">
                  <NavLink className="divStyle1 nav_box" to="/cteraWeb"
                        exact={false} >
                      <div className="overlay">
                        <TitleMain  title1="Administrator Portal" 
                                    subTitle="CTERA Networks" 
                                    classColor="whiteSmall"
                        />     
                        <div className="borderedIcons-overlay">
                          <BorderedIcon text="UX" classColor="white"/>
                          <BorderedIcon text="UI" classColor="white"/>
                          <BorderedIcon text="Web Application" classColor="white"/>
                        </div>  
                      </div>
                  </NavLink>

                  <NavLink className="divStyle2 nav_box" to="/CTERAMobile"
                        exact={false}>
                      <div className="overlay">
                        <TitleMain  title1="Native iOS/Android App" 
                                        subTitle="CTERA Networks" 
                                        classColor="whiteSmall"
                        />     
                        <div className="borderedIcons-overlay">
                            <BorderedIcon text="UX" classColor="white"/>
                            <BorderedIcon text="UI" classColor="white"/>
                            <BorderedIcon text="Mobile" classColor="white"/>
                        </div>  
                      </div>
                  </NavLink>
              </div>
              
              <div className="portfolio-container">
                  <NavLink className="divStyle3 nav_box" to="/myHerFootball"
                        exact={false}>
                      <div className="overlay">
                        <TitleMain  title1="Football DNA Marketing Campaign" 
                                        subTitle="MyHeritage" 
                                        classColor="whiteSmall"
                        />     
                        <div className="borderedIcons-overlay">
                            <BorderedIcon text="Responsive Web Design" classColor="white"/>
                        </div>  
                      </div>
                  </NavLink>
              </div>
          </div>

          <Footer/> 
          </>
      );
    }
  }
  
  export default Home;



// const imageUrl = require(`../../../imgs/${props.imgName}`);
// ${props.imgurl}
// style={{backgroundImage: `url(${props.imgurl})`}}
// style={{backgroundImage: `url(https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350)`}}
// style={{backgroundImage: `url(../../../imgs/Administrator-Portal-Main_1-p-130x130q80.png)`}}
// style={{backgroundImage: `url(${imageUrl})`, gridArea: `${props.imgGrid}`}}
// background-image: url(cat-pet-animal-domestic-104827.jpeg); 
// <Card imgName="Administrator-Portal-Main.png" imgGrid="pic1" />
            

 