import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import SkullnBone from "../images/profile.jpg"
import { Card, Col, Row} from 'react-bootstrap';

// picture of me and a blurb about myself...
// also should include my languages
export default function Home() {
  
    return (
      <div>

        <Col><h2 className= "text-center"> BEHOLD! It is I </h2> 
        
        </Col>


      <div className="card" >
        <div className="row no-gutters">
          <div className="col-md-4">
            
              <Card.Img src={SkullnBone} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">Mitchell Robbins</h1>
              <p className="card-text">
                First of my name. I'm a lifelong technologist who recently made the transition from hardware to software engineering.  I'm a classically trained psychologist and generalist adventurer who is looking to leverage a wealth of experience to take tech to the next level. 
              </p>
              <p className="card-text">
                <small className="text-muted">My languages and Technologies:</small>
              <br/>
                
                <Row xs="auto">
                  <Col>
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>Node.js</li>
                  </Col>
                  <Col>
                    <li>MySQL</li>
                    <li>GraphQL</li>
                    <li>Git/Bash</li>
                    <li>Heroku</li>
                  </Col>
                  <Col>
                    <li>CSS3/HTML5</li>
                    <li>Jest Testing</li>
                    <li>Insomnia/Postman</li>
                    <li>Bootstrap</li>
                  </Col>

                </Row>
              
              </p>
            </div>
          </div>
        </div>
      </div>


      </div>
    );}
