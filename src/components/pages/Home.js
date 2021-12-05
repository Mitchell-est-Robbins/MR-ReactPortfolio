import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import SkullnBone from "../images/skullbones.jpg"
import { Card } from 'react-bootstrap';
// picture of me and a blurb about myself...
// also should include my languages
export default function Home() {
  
    return (
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
    );
  
  
  // return (
  //   <div>
  //     <h1>Mitchell Robbins</h1>
      
  //     <p>
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
  //       velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
  //       ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
  //       non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
  //       ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
  //       rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
  //       tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
  //       porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
  //       vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
  //       fames ac ante ipsum primis in faucibus.
  //     </p>
  //   </div>
  // );
}
