import React, { Component } from "react";
import Section from '../../../Section/Section';
import Title from '../../../Section/ProjectSection/Title/Title';
import MockupMobile from '../../../Section/ProjectSection/MockupMobile/MockupMobile.js';
import MetaTags from 'react-meta-tags';

import classes from "./CteraMobile.css";


class CteraMobile extends Component { 
   
    render() {
        return (
            <>
            <MetaTags>
                <title>Native iOS/Android Applications</title>
                <meta content="Case study for CTERA native iOS and Android mobile applications. Read about my role in this project, design process, what we achieved, my learnings and takeaways" name="description"/>
                <meta content="Native iOS/Android Applications" property="og:title"/>
                <meta content="Case study for CTERA native iOS and Android mobile applications. Read about my role in this project, design process, what we achieved, my learnings and takeaways" property="og:description"/>
                <meta content="../../../../imgs/CTERA-App-Main-1-p-500.jpeg" property="og:image"/>
                <meta content="summary" name="twitter:card"/>
            </MetaTags>

            <div className="photo-wrapper">
                <img class="photo" 
                    src={require('../../../../imgs/CTERA-App-Main-1.jpg')}
                    srcSet={`
                            ${require('../../../../imgs/CTERA-App-Main-1-p-500.jpeg')} 500w, 
                            ${require('../../../../imgs/CTERA-App-Main-1-p-1080.jpeg')} 1080w, 
                            ${require('../../../../imgs/CTERA-App-Main-1-p-2000.jpeg')} 2000w, 
                            ${require('../../../../imgs/CTERA-App-Main-1-p-2600.jpeg')} 2600w, 
                            ${require('../../../../imgs/CTERA-App-Main-1-p-3200.jpeg')} 3200w, 
                            ${require('../../../../imgs/CTERA-App-Main-1.jpg')} 3840w
                        `}
                    alt="CTERA-App-Main"    
                                    
                />
            </div> 

            <div className="project-container">
                
                <Title text="Introduction"/>
                
                <p className="paragraph">
                  CTERA provides cloud storage solutions that enable service providers and enterprises to launch managed storage, backup, file sharing and mobile collaboration services using a single platform and based on the cloud storage infrastructure of their choice.
                  <br/>
                  <br/>
                  New mobile app design and development three main goals:
                </p>

                <div class="bullet-item margin-top-btm">
                  <div class="big-bullet-number">1</div>
                  <p className="paragraph">Replace old hybrid application due to slow performance and lack of features</p>
                </div>
                <div class="bullet-item margin-top-btm">
                  <div class="big-bullet-number">2</div>
                  <p className="paragraph">Improve users’ workflow using CTERA including offline file access and collaboration</p>
                </div>
                <div class="bullet-item margin-top-btm">
                  <div class="big-bullet-number">3</div>
                  <p className="paragraph">Provide users native app experience according to iOS and Android design guidelines and patterns</p>
                </div>

            </div>

            <div className="project-container">
              <Title text="My Role"/>

              <div class="bullet-item">
                  <div class="small-bullet"/>
                  <p className="paragraph">As a Product Designer in CTERA, I worked closely with project stakeholders (Product Team, Mobile Team and CTO) on features prioritization, providing designs, and writing requirement documents</p>
              </div>
              <div class="bullet-item">
                  <div class="small-bullet"/>
                  <p className="paragraph">Collaborated with Mobile Team from the beginning by presenting mockups and product requirements, collecting feedback and testing the final implementation</p>
              </div>
              <div class="bullet-item">
                  <div class="small-bullet"/>
                  <p className="paragraph">Validated that designs meet iOS and Android look and feel by presenting them to iPhone and Android mobile phones users</p>
              </div>
            </div>


            <div className="project-container self-start">
              <Title text="Design Process"/>
              <p className="paragraph blue-title">Phase 1</p>
            </div>
            
            <div class="photo-process-container">
                <img class="photo-process" src={require('../../../../imgs/Design-Process-P1.svg')} alt="Design Proces"/>
            </div>    

            <div className="project-container">
              <div class="bullet-item">
                  <div class="small-bullet"/>
                  <p className="paragraph">In Phase 1, we just started working on the apps from scratch, so the design process included "Wireframes and Prototypes". I  created wireframes and prototypes in InVision and presented them to the team and other people and collected feedback. It was important for me to present iOS prototypes to iPhone users and Android prototypes to Android users</p>
              </div>
            </div>

            <div class="admin-elements">
                <img class="inner-image"
                    src={require('../../../../imgs/Mobile-Wireframes.png')}
                    srcSet={`
                            ${require('../../../../imgs/Mobile-Wireframes-p-500.png')} 500w, 
                            ${require('../../../../imgs/Mobile-Wireframes-p-800.png')} 800w, 
                            ${require('../../../../imgs/Mobile-Wireframes-p-1080.png')} 1080w,
                            ${require('../../../../imgs/Mobile-Wireframes-p-1600.png')} 1600w, 
                            ${require('../../../../imgs/Mobile-Wireframes-p-2000.png')} 2000w, 
                            ${require('../../../../imgs/Mobile-Wireframes-p-2600.png')} 2600w, 
                            ${require('../../../../imgs/Mobile-Wireframes-p-3200.png')} 3200w, 
                            ${require('../../../../imgs/Mobile-Wireframes.png')} 3840w
                        `} 
                    alt="Mobile Wireframes"       
                />
            </div>

            <div className="project-container self-start">
              <p className="paragraph blue-title">Phase 2</p>
            </div>
            
            <div class="photo-process-container">
                <img class="photo-process" src={require('../../../../imgs/Design-Process-P2.svg')} alt="Design Proces"/>
            </div>  

            <div className="project-container">
              <div class="bullet-item">
                  <div class="small-bullet"/>
                  <p className="paragraph">In Phase 2 when we had a strong basis of the apps, I skipped wireframes creation as it was unnecessary at this stage. The process was shortened and time was saved</p>
              </div>
            </div>

            <div className="project-container">
                <Title text="What We Achieved"/>

                <div className="icon-section">
                        <div className="icon-with-bullets-image">
                            <img src={require('../../../../imgs/icons/icon-performance.svg')} alt="Performance Issue" />
                        </div>

                        <div className="bullet-section">
                            <h2 class="title">Fast Performance</h2>
                            <div class="bullet-item">
                                <div class="small-bullet"/>
                                <p className="paragraph">The previous hybrid application had very slow performance and caused negative client feedback. Also, in some cases after iOS or Android updates, the app crashed. With native development, all these issues were solved immediately</p>
                            </div>
                        </div>
                </div>
            
                <div className="icon-section">
                        <div className="icon-with-bullets-image">
                            <img src={require('../../../../imgs/icons/icon-native.svg')} alt="Performance Issue" />
                        </div>

                        <div className="bullet-section">
                            <h2 class="title">Native App Experience</h2>
                            <div class="bullet-item">
                                <div class="small-bullet"/>
                                <p className="paragraph">With native development, iPhone users and Android mobile phones users get the app that was designed according to relevant guidelines. So they started using the app naturally with the minimum learning curve</p>
                            </div>
                        </div>
                </div>
            </div>    
            


                <MockupMobile leftText="iOS"
                                title="File Manager"
                                rightText="Android"
                                imgNameLeft="File-Manager-iOS"
                                imgNameRight="File-Manager-Android"
                />

                <MockupMobile leftText="iOS"
                                title="Collaborators"
                                rightText="Android"
                                imgNameLeft="Collaborators-iOS"
                                imgNameRight="Collaborators-Android"
                />
                
                <MockupMobile leftText="iOS"
                                title="Collaborator’s Settings"
                                rightText="Android"
                                imgNameLeft="Collaborators-Settings-iOS"
                                imgNameRight="Collaborators-Settings-Android"
                />
                
                <MockupMobile leftText="iOS"
                                title="Offline Access Settings"
                                rightText="Android"
                                imgNameLeft="Offline-Settings-iOS"
                                imgNameRight="Offline-Settings-Android"
                />

            <div className="project-container">
                <div className="icon-section">
                        <div className="icon-with-bullets-image">
                            <img src={require('../../../../imgs/icons/icon-workflow.svg')} alt="Performance Issue" />
                        </div>

                        <div className="bullet-section">
                            <h2 class="title">Seamless Workflow Between Web and Mobile App</h2>
                            <div class="bullet-item">
                                <div class="small-bullet"/>
                                <p className="paragraph">With the new app users can access and edit their files with the smartphone even without internet connection. Also, they can share documents and work collaboratively on these files with their colleagues</p>
                            </div>
                        </div>
                </div>
            </div>    


            <div className="dark-section">
                <div className="project-container">
                    <div className="icon-section">
                            <div className="icon-with-bullets-image">
                                <img src={require('../../../../imgs/icons/icon-branding-white.svg')} alt="Performance Issue" />
                            </div>

                            <div className="bullet-section">
                                <h2 class="title white-text">Easy Branding</h2>
                                <div class="bullet-item">
                                    <div class="small-bullet bullet-white"/>
                                    <p className="paragraph white-text">CTERA provides white-labeled product to the clients. In the design process, I used only vector assets and native components, which allow color change by code, without replacing the asset itself. Also, I created a style guide with the color palette, icon sets, app elements, and typography and this allowed developers to create a skin file that can be changed easily by the client according to the company branding</p>
                                </div>
                            </div>
                    </div>
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
                  <p className="paragraph blue-title">iOS and Android are Two Different Worlds</p>
                </div>

                <p className="paragraph">
                At the beginning of the project, one of the stakeholders tried to convince me to do one design that will fit both, iOS and Android devices. By discussing this wish with Mobile Team, reviewing the iOS and Android (Material Design) guidelines I succeeded in convincing the stakeholder that we must design two separate apps, one for iOS, and second for Android mobile devices. After, I got confirmations that this was the right decision when I was testing designs on iPhone and Android phones users. As an Android  user, sometimes Android elements were passed to iOS designs, and iPhone users saw these immediately and told me “Hey, this looks weird!”
                </p>

                <div class="bullet-item margin-top-btm">
                  <div class="big-bullet-number">3</div>
                  <p className="paragraph blue-title">Sketch + Zeplin = Productivity Boost</p>
                </div>

                <p className="paragraph">
                     I knew that exporting assets for a project like this could take a lot of time if I didn't do it right. Luckily, I heard about Zeplin app and how efficient it is. With the Zeplin app I could upload all screens from a Sketch file and then developers could download what was relevant to them. iOS developers downloaded PNG files for all iOS device resolutions, and Android developers downloaded PNG and SVG files. 
                     <br/>
                     <br/>
                     After  the great experience with the Sketch and Zeplin workflow, we purchased the full license for Zeplin and I started using it with other development teams.
                     <br/>
                     <br/>
                     I think if I had done it manually - maybe this project would have never finished, just kidding :)
                </p>

            </div>

            

             </>
        );
    }
}

export default CteraMobile;
