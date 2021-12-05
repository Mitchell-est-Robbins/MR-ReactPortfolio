import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import SkullnBone from "../images/skullbones.jpg"
import { Card, Col} from 'react-bootstrap';

// picture of me and a blurb about myself...
// also should include my languages
export default function Home() {
  
    return (
      <div>

        <Col><h2 className= "text-center"> BEHOLD! </h2> 
        
        </Col>


      <div className="card" >
        <div className="row no-gutters">
          <div className="col-md-4">
            
              <Card.Img src={SkullnBone} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">Title</h1>
              <p className="card-text">
                Card Text
              </p>
              <p className="card-text">
                <small className="text-muted">Card Text 2</small>
              </p>
            </div>
          </div>
        </div>
      </div>


      </div>
    );}
