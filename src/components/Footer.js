import { ICONS } from "jest-util/build/specialChars";
import React from "react";
import { Row, Col, } from 'react-bootstrap';
import Github from "./images/github-3.svg"
import Linkdin from "./images/linkedin-3.svg"
import Resume from "./images/cv-4.svg"

function Footer(){
    return(
        <div>
{/* footer here */}
        <Row className='justify-content-center text-center' xs="auto">
        
        <Col >
        <a href= "https://github.com/Mitchell-est-Robbins" >
            <img src={Github} alt="Github icon and link"></img>
        </a>
        </Col>
        <Col >
        <a href= "https://www.linkedin.com/in/mrmitchellrobbins/" >
            <img src={Linkdin} alt="Linkdin icon and link"></img>
        </a>
        </Col>
        <Col >
        <a href= "https://my.indeed.com/p/mitchellr-czg7i0c" >
            <img src={Resume} alt="Resume icon and link"></img>
        </a>
        </Col>
        </Row>
        </div>


    )
}

export default Footer;