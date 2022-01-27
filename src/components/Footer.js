import React from "react";
import { Row, Col, } from 'react-bootstrap';
import Github from "./images/github-3.svg"
import Linkedin from "./images/linkedin-3.svg"
import Resume from "./images/cv-4.svg"
import email from "./images/email-2.svg"
import './css/App.css'

function Footer(){
    return(
        <div>
{/* footer here */}
        <Row className='justify-content-center color1' xs="auto">
        
        <Col >
        <a href= "https://github.com/Mitchell-est-Robbins" >
            <img src={Github} alt="Github icon and link"></img>
        </a>
        </Col>
        <Col >
        <a href= "https://www.linkedin.com/in/mrmitchellrobbins/" >
            <img src={Linkedin} alt="Linkdin icon and link"></img>
        </a>
        </Col>
        <Col >
        {/* <a href= "https://my.indeed.com/p/mitchellr-czg7i0c" >  =========OLD RESUME W/Indeed*/}
        {/* <a href= "https://drive.google.com/file/d/1j7tqn3HARKqVeWUtx-65yAbSB1qQO8En/view?usp=sharing" > */}
        <a href= "https://drive.google.com/file/d/1JUIP1XvK1t7S_Y4eDENVWiBxLW6Lk1kG/view?usp=sharing" >
   
            <img src={Resume} alt="Resume icon and link"></img>
        </a>
        </Col>
        <Col >
        <a href= "mailto:mitchell.est.robbins@gmail.com" >
            <img src={email} alt="Email icon and link"></img>
        </a>
        </Col>
        </Row>
        </div>


    )
}

export default Footer;