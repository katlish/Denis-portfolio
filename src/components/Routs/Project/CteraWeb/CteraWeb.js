import React, { Component } from "react";
import MetaTags from 'react-meta-tags';

import Title from '../../../Section/ProjectSection/Title/Title';


import classes from "./CteraWeb.css";

class CteraWeb extends Component { 
    

    render() {
        return (
            <>
            <MetaTags>
                <title>Administrator Portal</title>
                <meta content="Case study for CTERA Networks Administrator Portal redesign project. Read about my role in this project, design process, problems and solutions, my learnings and takeaways" name="description"/>
                <meta content="Administrator Portal" property="og:title"/>
                <meta content="Case study for CTERA Networks Administrator Portal redesign project. Read about my role in this project, design process, problems and solutions, my learnings and takeaways" property="og:description"/>
                <meta content="../../../../imgs/Administrator-Portal-Main-1-p-500.jpeg" property="og:image"/>
                <meta content="summary" name="twitter:card"/>
            </MetaTags>

            <div className="photo-wrapper">
                <img class="photo"
                    src={require('../../../../imgs/Administrator-Portal-Main-1.jpg')}
                    srcSet={`
                            ${require('../../../../imgs/Administrator-Portal-Main-1-p-500.jpeg')} 500w, 
                            ${require('../../../../imgs/Administrator-Portal-Main-1-p-1080.jpeg')} 1080w,
                            ${require('../../../../imgs/Administrator-Portal-Main-1-p-2000.jpeg')} 2000w, 
                            ${require('../../../../imgs/Administrator-Portal-Main-1-p-2600.jpeg')} 2600w, 
                            ${require('../../../../imgs/Administrator-Portal-Main-1-p-3200.jpeg')} 3200w, 
                            ${require('../../../../imgs/Administrator-Portal-Main-1.jpg')} 3840w
                        `} 
                    alt="Administrator-Portal"       
                                    
                />
                
            </div> 

          
            <div className="project-container">
                
                <Title text="Introduction"/>
                
                <p className="paragraph">
                  CTERA provides cloud storage solutions that enable service providers and enterprises to launch managed storage, backup, file sharing and mobile collaboration services using a single platform and based on the cloud storage infrastructure of their choice.
                  <br/>
                  <br/>
                  Administrator Portal is very important because all CTERA clients are using it for defining policy, users, cloud folders, portals, devices, servers, storage node and many more.
  ‍
                  <br/>
                  <br/>
                  Administrator Portal redesign (update old running version) project had two main goals:
                </p>

                <div class="bullet-item margin-top-btm">
                  <div class="big-bullet-number">1</div>
                  <p className="paragraph">Fix usability based on clients' feedback</p>
                </div>
                <div class="bullet-item margin-top-btm">
                  <div class="big-bullet-number">2</div>
                  <p className="paragraph">Switch from the old technology to Angular due to slow performance</p>
                </div>

            </div>

            <div className="project-container">
              <Title text="My Role"/>

              <div class="bullet-item">
                  <div class="small-bullet"/>
                  <p className="paragraph">Worked closely with project stakeholders (CTO and Product Team) on analyzing clients feedback, usability issues and how to solve them</p>
              </div>
              <div class="bullet-item">
                  <div class="small-bullet"/>
                  <p className="paragraph">Collaborated with GUI Team from the beginning by presenting mockups and verifying that new design solution meets developers schedule until final implementation</p>
              </div>
            </div>

            <div className="project-container self-start">
              <Title text="Design Process"/>
            </div>
            
            <div class="photo-process-container">
                <img class="photo-process" src={require('../../../../imgs/Design-Process.svg')} alt="Design Proces"/>
            </div>

            <div className="project-container">
              <div class="bullet-item">
                  <div class="small-bullet"/>
                  <p className="paragraph">Collaborated with GUI Team from the beginning by presenting mockups and verifying that new design solution meets developers schedule until final implementation</p>
              </div>
            </div>

            <div className="project-container">
                  <Title text="Problems & Solutions"/>

                  <div className="icon-section">

                    <div className="icon-with-bullets-image">
                        <img src={require('../../../../imgs/icons/icon-navigation.svg')} />
                    </div>

                    <div className="bullet-section">
                        <h2 class="title">Navigation Issue</h2>
                        <div class="bullet-item">
                            <div class="small-bullet"/>
                            <p className="paragraph">Unintuitive portal navigation located on the bottom of the screen</p>
                        </div>

                        <h2 class="title">Solution</h2>
                        <div class="bullet-item">
                            <div class="small-bullet"/>
                            <p className="paragraph">The solution was to follow the existing navigation design pattern and to place portal navigation on the top</p>
                        </div>
                    </div>

                  </div>
              


                  <div className="icon-section">
                    <div className="icon-with-bullets-image">
                        <img src={require('../../../../imgs/icons/icon-overload.svg')} />
                    </div>
                    <div className="bullet-section">
                        <h2 class="title">Cognitive Overload</h2>
                        <div class="bullet-item">
                            <div class="small-bullet"/>
                            <p className="paragraph">Data was not optimally organized. Result: too many columns causing a horizontal scroll</p>
                        </div>
                        <div class="bullet-item">
                            <div class="small-bullet"/>
                            <p className="paragraph">Too many empty cells that take up valuable screen real estate</p>
                        </div>
                        <div class="bullet-item">
                            <div class="small-bullet"/>
                            <p className="paragraph">Multiple icons that do not have any value and make layout visual clutter</p>
                        </div>

                        <h2 class="title">Solution</h2>
                          <div class="bullet-item">
                              <div class="small-bullet"/>
                              <p className="paragraph">Data reorganization and component creation displays data more cleanly. Result: the table is easy to read and is user friendly with real estate saved by removing many columns</p>
                          </div>
                    </div>
                  </div>
            </div>      

                <div class="admin-elements">
                    <img class="admin-elements-screen"
                        src={require('../../../../imgs/Admin-Portal-1.png')}
                        width="1040" 
                        srcSet={`
                                ${require('../../../../imgs/Admin-Portal-1-p-500.png')} 500w, 
                                ${require('../../../../imgs/Admin-Portal-1-p-800.png')} 800w,
                                ${require('../../../../imgs/Admin-Portal-1-p-1080.png')} 1080w, 
                                ${require('../../../../imgs/Admin-Portal-1-p-1600.png')} 1600w, 
                                ${require('../../../../imgs/Admin-Portal-1-p-2000.png')} 2000w, 
                                ${require('../../../../imgs/Admin-Portal-1.png')} 2080w
                            `} 
                        alt="Devices Screen"       
                                        
                    />
                    <img class="admin-elements-screen"
                        src={require('../../../../imgs/Admin-Portal-2.png')}
                        width="1040" 
                        srcSet={`
                                ${require('../../../../imgs/Admin-Portal-2-p-500.png')} 500w, 
                                ${require('../../../../imgs/Admin-Portal-2-p-800.png')} 800w,
                                ${require('../../../../imgs/Admin-Portal-2-p-1080.png')} 1080w, 
                                ${require('../../../../imgs/Admin-Portal-2-p-1600.png')} 1600w, 
                                ${require('../../../../imgs/Admin-Portal-2-p-2000.png')} 2000w, 
                                ${require('../../../../imgs/Admin-Portal-2.png')} 2080w
                            `} 
                        alt="Users Screen"       
                                        
                    />
                </div>
            <div className="project-container">
                <div className="icon-section">
                    <div className="icon-with-bullets-image">
                        <img src={require('../../../../imgs/icons/icon-performance.svg')} alt="Performance Issue" />
                    </div>

                    <div className="bullet-section">
                        <h2 class="title">Performance Issue</h2>
                        <div class="bullet-item">
                            <div class="small-bullet"/>
                            <p className="paragraph">Slow performance due to old technology</p>
                        </div>

                        <h2 class="title">Solution</h2>
                        <div class="bullet-item">
                            <div class="small-bullet"/>
                            <p className="paragraph">I reviewed the Angular library and used existing elements in my designs to make the implementation progress faster. I collaborated with the GUI team to create new components as needed</p>
                        </div>
                    </div>
                  </div>

                  <div className="icon-section">
                    <div className="icon-with-bullets-image">
                        <img src={require('../../../../imgs/icons/icon-settings.svg')} alt="Performance Issue" />
                    </div>

                    <div className="bullet-section">
                        <h2 class="title">Settings Screens</h2>
                        <div class="bullet-item">
                            <div class="small-bullet"/>
                            <p className="paragraph">Setting screens were unnecessarily small and crowded, not utilizing the available screen real estate. Users were forced to scroll and click more than needed</p>
                        </div>
                        <div class="bullet-item">
                            <div class="small-bullet"/>
                            <p className="paragraph">Categories were not intuitive to use, frustrating users who can't find the correct settings</p>
                        </div>

                        <h2 class="title">Solution</h2>
                        <div class="bullet-item">
                            <div class="small-bullet"/>
                            <p className="paragraph">Reorganization of content was built by my working closely with the CTO and the Product Development Team. settings open in the full screen with horizontal tabs navigation. Almost in all cases, users will see all tabs without any scroll</p>
                        </div>
                    </div>
                  </div>
            </div>
                  

                  <div class="admin-elements">
                    <img class="inner-image"
                            src={require('../../../../imgs/Settings-Screens.png')}
                            width="3159" 
                            srcSet={`
                                    ${require('../../../../imgs/Settings-Screens-p-500.png')} 500w, 
                                    ${require('../../../../imgs/Settings-Screens-p-800.png')} 800w,
                                    ${require('../../../../imgs/Settings-Screens-p-1080.png')} 1080w, 
                                    ${require('../../../../imgs/Settings-Screens-p-1600.png')} 1600w, 
                                    ${require('../../../../imgs/Settings-Screens-p-2000.png')} 2000w, 
                                    ${require('../../../../imgs/Settings-Screens-p-2600.png')} 2600w, 
                                    ${require('../../../../imgs/Settings-Screens-p-3200.png')} 3200w, 
                                    ${require('../../../../imgs/Settings-Screens.png')} 3840w
                                `} 
                            alt="Settings Screen Examples"       
                        />
                  </div>

            <div className="project-container">

                  <div className="icon-section">
                    <div className="icon-with-bullets-image">
                        <img src={require('../../../../imgs/icons/icon-branding.svg')} alt="Branding Issue" />
                    </div>

                    <div className="bullet-section">
                        <h2 class="title">Branding Issue</h2>
                        <div class="bullet-item">
                            <div class="small-bullet"/>
                            <p className="paragraph">CTERA provides white-labeled product to the clients. Then clients had to replace CTERA assets with branded assets, including updating CSS files manually. In addition, the fact that all assets were PNG/JPEG images made the process even more complicated. Many clients complained about this complex branding change process</p>
                        </div>

                        <h2 class="title">Solution</h2>
                        <div class="bullet-item">
                            <div class="small-bullet"/>
                            <p className="paragraph">In the redesign process, I used only vector assets, which allow color change by code, without replacing the asset itself. Also, I created a style guide with the color palette, icon sets, table elements, and typography and this allowed developers to link classes they use to the style guide. This is how we decided to develop Palette Generator. From the developer's view this feature wasn't too hard to implement, but brought huge value to CTERA clients. Now Admins can make fully branded skins for both Administrators and End User portals from one page</p>
                        </div>
                    </div>
                  </div>
                </div>
                
              <div className="palette-section">
                <div class="palette-item">
                  <div class="note-text">
                    Palette Generator Screen
                  </div>
                    <img class="color-palette-image-1"
                            src={require('../../../../imgs/Color-Palette-1.png')}
                            width="1520" 
                            srcSet={`
                                    ${require('../../../../imgs/Color-Palette-1-p-500.png')} 500w, 
                                    ${require('../../../../imgs/Color-Palette-1-p-800.png')} 800w,
                                    ${require('../../../../imgs/Color-Palette-1-p-1080.png')} 1080w, 
                                    ${require('../../../../imgs/Color-Palette-1-p-1600.png')} 1600w, 
                                    ${require('../../../../imgs/Color-Palette-1-p-2000.png')} 2000w, 
                                    ${require('../../../../imgs/Color-Palette-1-p-2600.png')} 2600w, 
                                    ${require('../../../../imgs/Color-Palette-1.png')} 3040w
                                `} 
                            alt="Palette Generator Screen"       
                                            
                    />
                </div>

                <div class="palette-item">
                  <div class="note-text">
                  Preview Dialog: here admins could see the live preview and download branded CSS files
                  </div>
                    <img class="color-palette-image-1"
                            src={require('../../../../imgs/Color-Palette-2.png')}
                            width="1520" 
                            srcSet={`
                                    ${require('../../../../imgs/Color-Palette-2-p-500.png')} 500w, 
                                    ${require('../../../../imgs/Color-Palette-2-p-800.png')} 800w,
                                    ${require('../../../../imgs/Color-Palette-2-p-1080.png')} 1080w, 
                                    ${require('../../../../imgs/Color-Palette-2-p-1600.png')} 1600w, 
                                    ${require('../../../../imgs/Color-Palette-2-p-2000.png')} 2000w, 
                                    ${require('../../../../imgs/Color-Palette-2-p-2600.png')} 2600w, 
                                    ${require('../../../../imgs/Color-Palette-2.png')} 3040w
                                `} 
                            alt="Palette Preview Dialog"       
                                            
                    />
                </div>
              </div>

              <div className="project-container">
                
                <Title text="Learnings & Takeaways"/>
                
                <div class="bullet-item margin-top-btm">
                  <div class="big-bullet-number">1</div>
                  <p className="paragraph blue-title">Collaboration is the Key to Success</p>
                </div>

                <p className="paragraph">
                    This is not new for me, but worth mentioning. Working with other people directly, sharing the process, and getting feedback will help get better and much quicker results. I really believe that only with collaboration can we achieve a great product
                </p>

                 <div class="bullet-item margin-top-btm">
                  <div class="big-bullet-number">2</div>
                  <p className="paragraph blue-title">Sketch is Awesome</p>
                </div>

                <p className="paragraph">
                     Previously I worked with Photoshop, but this project I decided to give Sketch a try. I was very impressed with this app, it was made exactly for what I needed: designing mockups, syncing screens to InVision for easy presentation and feedback collection, creating the style guide, and exporting assets to developers. This workflow was productive and worked perfectly for all teams
                     <br/>
                     <br/>
                     I am sure, that if I was doing the same project in Photoshop it could take a much longer time to get all these things done
                </p>

                <div class="bullet-item margin-top-btm">
                  <div class="big-bullet-number">3</div>
                  <p className="paragraph blue-title">SVG is King</p>
                </div>

                <p className="paragraph">
                    Using raster images in GUI can be frustrating. Monitors have become larger, some of them support retina, some of them don’t. This can be a reason that some JPEG or PNG images don’t look sharp, and this could drive a designer crazy. To verify this - ask your designer friend :)
                     <br/>
                     <br/>
                     In this project, I learned a lot about SVG files. During my work I came across new issues that have never troubled me before like: why are these vector icons looking pixaleted after implementation? Or, why are these icons not aligned? Now I got answers and know how to create a perfect icon set (even multi-colored)
                </p>

            </div>
           
            </>
        );
    }
}

export default CteraWeb;


/* 

<div class="Section">
  
<div class="container">
  <div class="title-cont">
    <h1> Title </h1>
    <h4> separator </h4>
  </div>
  
  <p> Parag</p>
  <div class="item">1</div>
  
</div>
</div>  


body {
  padding: 20px;
  font: 1em Helvetica Neue, Helvetica, Arial, sans-serif;
}

* {box-sizing: border-box;}

p {
  margin: 0 0 1em 0;
}

.Section {
  padding-top: 30px;
    padding-bottom: 30px;
  background-color: grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container {  
  flex: 1 1 auto;
  border: 5px solid rgb(111,41,97);
  border-radius: .5em;
  padding: 10px;
  
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 21%;
    margin-right: 21%;
    max-width: 940px;
}

.title-cont {
  
  border: 5px solid red;
  border-radius: .5em;
  padding: 10px;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

h1,
h4 {
  flex: 0 0 auto;
}


p {
  flex: 1;
  margin: 10px;
}

.item {
  width: 100px;
  height: 200px;
  padding: 10px;
  margin: 10px;
  background-color: rgba(111,41,97,.3);
  border: 2px solid rgba(111,41,97,.5);
}

*/