import React from "react";
import Header from "../../Header/Header";
import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import ThanxBox from '../../ThanxBox/ThanxBox';
import BorderedIcon from '../../BorderedIcon/BorderedIcon';
import Section from '../../Section/Section';

import {} from './Project.css'

import CteraWeb from '../Project/CteraWeb/CteraWeb';
import CteraMobile from '../Project/CTERAMobile/CteraMobile';
import MyHerFootball from '../Project/MyHerFootball/MyHerFootball';
import ErrorPage from '../Project/ErrorPage/ErrorPage';


const Project = ({ match }) => {
   
    const projects = [
        {
            name: 'cteraWeb',
            title1:"Administrator Portal" ,
            subTitle:"CTERA Networks" ,
            borderedIcon1: 'UX',
            borderedIcon2: 'UI',
            borderedIcon3: 'Web Application',
            id: 0

        },
        {
            name: 'CTERAMobile',
            title1:"Native iOS/Android Applications" ,
            subTitle:"CTERA Networks" ,
            borderedIcon1: 'UX',
            borderedIcon2: 'UI',
            borderedIcon3: 'Mobile',
            id: 1
        },
        {
            name: 'myHerFootball',
            title1:"Football DNA Marketing Campaign" ,
            subTitle:"MyHeritage" ,
            borderedIcon1: 'Responsive Web Design',
            id: 2
        }
    ];

    const components = {
        cteraWeb: CteraWeb,
        CTERAMobile: CteraMobile,
        myHerFootball: MyHerFootball,
        errorPage: ErrorPage
      };

    const project = projects.find(({ name }) => name === match.params.projectName);
    let MyComponent;
    let nameNext;
    let namePrev;

    if (project) {
        MyComponent = components[project.name];
        
        const id = project.id;

        if (id === 0 && projects.length > 1) {
            namePrev = projects[projects.length - 1].name;
            nameNext = projects[id + 1].name;
        } else if (id >= projects.length - 1) {
            namePrev = projects[id - 1].name;
            nameNext = projects[0].name;
        } else {
            namePrev = projects[id - 1].name;
            nameNext = projects[id + 1].name;
        }
    }  else {
        MyComponent = components["errorPage"];
    }
    


    



    return (
        <>
        <NavBar/>  
        {
            project ? 
                    <Header title1={ project.title1 } 
                            subTitle={ project.subTitle } 
                            classColor="blueBig"
                    >  
                    <div className="borderedIcons">
                        {project.borderedIcon1 ? <BorderedIcon text={ project.borderedIcon1 } classColor="blueSmall"/> : null}
                        {project.borderedIcon2 ? <BorderedIcon text={ project.borderedIcon2 } classColor="blueSmall"/> : null}
                        {project.borderedIcon3 ? <BorderedIcon text={ project.borderedIcon3 } classColor="blueSmall"/> : null}
                    </div>
                    </Header>
                    :
                  null  

        }
        
        <Section>
            <MyComponent />
        </Section>

        {
            project ?
                        <ThanxBox toNext={nameNext} toPrev={namePrev}/>
                    :
                    null

        }
        
        <Footer/> 
        </>
    );
    
}

export default Project;