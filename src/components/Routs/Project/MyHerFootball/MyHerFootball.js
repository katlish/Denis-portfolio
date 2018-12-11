import React, { Component } from "react";
import Section from '../../../Section/Section';
import Title from '../../../Section/ProjectSection/Title/Title';
import ProjectButton from '../../../ThanxBox/ProjectButton/ProjectButton';
import MetaTags from 'react-meta-tags';

import classes from "./MyHerFootball.css";


class MyHerFootball extends Component { 
   
    render() {
        return (
            <>
            <MetaTags>
                <title>Football DNA Marketing Campaign</title>
                <meta content="Case study for Football DNA campaign that I designed for MyHeritage. Read about my role in this project, design process, my learnings and takeaways" name="description"/>
                <meta content="Football DNA Marketing Campaign" property="og:title"/>
                <meta content="Case study for Football DNA campaign that I designed for MyHeritage. Read about my role in this project, design process, my learnings and takeaways" property="og:description"/>
                <meta content="../../../../imgs/Football-DNA-p-500.jpeg" property="og:image"/>
                <meta content="summary" name="twitter:card"/>
            </MetaTags>

            <div className="photo-wrapper">
                <img class="photo"
                    src={require('../../../../imgs/Football-DNA.jpg')}
                    srcSet={`
                            ${require('../../../../imgs/Football-DNA-p-500.jpeg')} 500w, 
                            ${require('../../../../imgs/Football-DNA-p-1080.jpeg')} 1080w, 
                            ${require('../../../../imgs/Football-DNA-p-2000.jpeg')} 2000w, 
                            ${require('../../../../imgs/Football-DNA-p-2600.jpeg')} 2600w, 
                            ${require('../../../../imgs/Football-DNA-p-3200.jpeg')} 3200w, 
                            ${require('../../../../imgs/Football-DNA.jpg')} 3840w
                        `} 
                    alt="Football-DNA"       
                                    
                />
            </div>
            
            <div className="project-container">
                
                <Title text="Introduction"/>
                
                <p className="paragraph">
                    MyHeritage is an online genealogy platform with the web, mobile, and software products and services.
                  <br/>
                  <br/>
                  To coincide with the 2018 World Cup in Russia MyHeritage Marketing Team launched a campaign
revealing the DNA of eight legendary football players and their ethnic background.
  ‍
                  <br/>
                  <br/>
                  The main goal of the campaign:
                </p>

                <div class="bullet-item margin-top-btm">
                  <div class="big-bullet-number">1</div>
                  <p className="paragraph">To attract a new audience interested in football to MyHeritage DNA brand</p>
                </div>
            </div>

            <div className="project-container">
              <Title text="My Role"/>

              <div class="bullet-item">
                  <div class="small-bullet"/>
                  <p className="paragraph">As a Freelance Product Designer, I worked closely with the Marketing Team, Head of Design, Copywriter and Social Media Manager</p>
              </div>
              <div class="bullet-item">
                  <div class="small-bullet"/>
                  <p className="paragraph">Designed and presented mockups to project stakeholders to get feedback</p>
              </div>
              <div class="bullet-item">
                  <div class="small-bullet"/>
                  <p className="paragraph">Provided graphic assets to developers</p>
              </div>
              <div class="bullet-item">
                  <div class="small-bullet"/>
                  <p className="paragraph">Tested the website implementation</p>
              </div>
            </div>

            <div className="project-container self-start">
              <Title text="Design Process"/>
            </div>
            
            <div class="photo-process-container">
                <img class="photo-process" src={require('../../../../imgs/Design-Process-DNA.svg')} alt="Design Proces"/>
            </div>

            <div className="project-container">
              <div class="bullet-item">
                  <div class="small-bullet"/>
                  <p className="paragraph">My process started with reviewing wireframes that I got from the Marketing Team and brainstorming about the project with the Project Manager and Head of Design. After these initial meetingsI took freedom with the design process as normal</p>
              </div>
            </div>
            

            <div className="project-container">
                <Title text="Visual Language"/>
            

                <div className="icon-section">

                    <div className="icon-with-bullets-image">
                        <img src={require('../../../../imgs/icons/icon-dark.svg')} />
                    </div>

                    <div className="bullet-section">
                        <h2 class="title">Dark Interface</h2>
                        <div class="bullet-item">
                            <div class="small-bullet"/>
                            <p className="paragraph">After the research I conducted, I saw that most sport websites and sport video game interfaces are dark with very bright elements. So the decision was to stick to the existing pattern</p>
                        </div>
                    </div>
                </div>

                <div className="icon-section">
                    <div className="icon-with-bullets-image">
                        <img src={require('../../../../imgs/icons/icon-dynamic.svg')} />
                    </div>

                    <div className="bullet-section">
                        <h2 class="title">Dynamic and Bright Elements</h2>
                        <div class="bullet-item">
                            <div class="small-bullet"/>
                            <p className="paragraph">To give the website the dynamic look I decided to do the following: use bold italic font and add bright multi-colored diagonal lines</p>
                        </div>
                    </div>
                </div>
            </div>    

                  
            <div className="logo-section logo">
                <div className="project-container">
                    <img src={require('../../../../imgs/Football-DNA-Logo.svg')} alt="Football DNA Logo"/>
                </div>
            </div>

            <div className="project-container">
                <div className="icon-section">
                    <div className="icon-with-bullets-image">
                        <img src={require('../../../../imgs/icons/icon-branding.svg')} />
                    </div>

                    <div className="bullet-section">
                        <h2 class="title">Color Usage</h2>
                        <div class="bullet-item">
                            <div class="small-bullet"/>
                            <p className="paragraph">To connect the design to the brand, I used MyHeritage DNA colors with the lines on the homepage. In addition, I decided to give each football player his own color that comes from the country flag. So in the player pages, I used "player color" on the top section of the site where a player overview is written. But from the ethnicity section and lower, I used the brand purple color</p>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="logo-section players">
                <div className="project-container">
                    <img className="photo-players"
                        src={require('../../../../imgs/DNA-Players.png')}
                        width="780px"
                        srcSet={`
                                ${require('../../../../imgs/DNA-Players-p-500.png')} 500w, 
                                ${require('../../../../imgs/DNA-Players-p-800.png')} 800w, 
                                ${require('../../../../imgs/DNA-Players-p-1080.png')} 1080w, 
                                ${require('../../../../imgs/DNA-Players-p-1600.png')} 1600w, 
                                ${require('../../../../imgs/DNA-Players.png')} 1880w
                            `} 
                        alt="Football DNA Players"       
                                        
                    />
                </div>
            </div>


            <div className="project-section">
                <div className="project-container">
                    <div className="centered">
                        <Title text="Final Design" isCentered={true}/>
                    </div>
                </div>    
            </div>
            

            <div className="mockup-container">
                <div class="note-text">Homepage Web and Mobile Versions</div>
                <img className="photo-mockup-DNA"
                    src={require('../../../../imgs/DNA-Homepage.jpg')}
                    width="980" 
                    srcSet={`
                            ${require('../../../../imgs/DNA-Homepage-p-500.jpeg')} 500w, 
                            ${require('../../../../imgs/DNA-Homepage-p-800.jpeg')} 800w, 
                            ${require('../../../../imgs/DNA-Homepage-p-1080.jpeg')} 1080w, 
                            ${require('../../../../imgs/DNA-Homepage-p-1600.jpeg')} 1600w, 
                            ${require('../../../../imgs/DNA-Homepage.jpg')} 1960w
                        `} 
                    alt="Football DNA Homepage"       
                />
            </div>

            <div class="dashed-line-horizontal fullscreen"/>

            <div className="mockup-container">
                <div class="note-text">Player Web and Mobile Versions</div>
                    <img className="photo-mockup-DNA"
                        src={require('../../../../imgs/DNA-Player-Page.jpg')}
                        width="980" 
                        srcSet={`
                                ${require('../../../../imgs/DNA-Player-Page-p-500.jpeg')} 500w, 
                                ${require('../../../../imgs/DNA-Player-Page-p-800.jpeg')} 800w, 
                                ${require('../../../../imgs/DNA-Player-Page-p-1080.jpeg')} 1080w, 
                                ${require('../../../../imgs/DNA-Player-Page-p-1600.jpeg')} 1600w, 
                                ${require('../../../../imgs/DNA-Player-Page.jpg')} 1960w
                            `} 
                        alt="Football DNA Page"       
                    />
            </div>

            <div class="dashed-line-horizontal fullscreen"/>
            
            <div className="project-container">
                
                <Title text="Learnings & Takeaways"/>
                
                <div class="bullet-item margin-top-btm">
                  <div class="big-bullet-number">1</div>
                  <p className="paragraph blue-title">Collaboration is the Key to Success</p>
                </div>

                <p className="paragraph">
                This is not new for me, but worth mentioning. Working with other people directly, sharing the process, and getting feedback will help to get better and much quicker results
                </p>

                 <div class="bullet-item margin-top-btm">
                  <div class="big-bullet-number">2</div>
                  <p className="paragraph blue-title">Design for Sports Fans</p>
                </div>

                <p className="paragraph">
                This was the first time that I needed to design for the audience that loves sports, especially football. I enjoyed conducting the research on this subject. Also, I learned the names of eight football legends and their countries and teams :)
                </p>

                <div class="bullet-item margin-top-btm">
                  <div class="big-bullet-number">3</div>
                  <p className="paragraph blue-title">Symbols in Sketch will do Magic</p>
                </div>

                <p className="paragraph">
                As a part of this project I needed to design one homepage and player page template, that would be used for all eight football players. So the player page will be developed one time and only image assets will be replaced according to the relevant player. Therefore it was the perfect time for me to learn how to use symbol overrides in Sketch, and I must say that this feature made my work on this project much faster and more productive. For example, the Project Manager asked me to enlarge the player names, and with the symbols, I did this change only one time and all assets were updated automatically on all mockup screens
                </p>

            </div>
            
            <Section>
                <ProjectButton text="Go to MyHeritage Football DNA" 
                            isHref="https://footballdna.myheritage.com/"/>
            </Section>

             </>
        );
    }
}

export default MyHerFootball;
