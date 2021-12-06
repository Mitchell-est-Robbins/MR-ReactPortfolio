import React from 'react';
import { Col, Row} from 'react-bootstrap';

// probably delete or make it info that isn't main... so like hobbies and educational history 
export default function About() {
  return (
    <div>
      <Col><h1 className= "text-center"> A bit about me </h1> </Col>

      <div>
      <Row><p className=" " >“But, what about when you aren't coding?!”</p>  </Row>
      <Row ><p className="">Well I'm always coding... when I'm using my brain muscle less, you can find me in the gym using my actual muscles. Strong body, strong mind.</p>  </Row>
      <br/>
      <Row><p className="" >“So no art or philosophy?”</p>  </Row>
      <Row><p className="" >Why not both? The paintbrush is an extension of my soul. </p>  </Row>
      <br/>
      <Row><p className="" >“That is kinda cliché...”</p>  </Row>
      <Row><p className="" >Au contraire mon ami, I find beauty in all things. So I must be an artist, or have very poor taste. </p>  </Row>
      <br/>
      <Row><p className="" >“You like tech?” </p>  </Row>
      <Row><p className="" >3d printing and FPV drone flying are magic.</p>  </Row>
      <Row><p className="" >“so NO then? </p>  </Row>
      <Row><p className="" >I am a wizard. </p>  </Row>
      </div>

    </div>
  );
}
