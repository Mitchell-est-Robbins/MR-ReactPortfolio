import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Col } from 'react-bootstrap';
// import SkullnBone from "../images/skullbones.jpg"
import Main1 from "../images/main1.png";
import Main2 from "../images/main2.png";
import Mini1 from "../images/mini1.png";
import Mini2 from "../images/mini2.png";
import Mini3 from "../images/mini3.jpg";
import mini4 from "../images/mini4.png";
import Mini5 from "../images/mini5.jpg";


// this will need to be portfolio... have cards with magus opus and minorus opus
export default function Portfolio() {
  return (
    <div>
      {/* header */}
      <Col><h1 className="text-center"> Where the Magic Happens</h1> </Col>
      <br/>
      {/* cards========================= */}
      <div className="card" >
        <div className="row no-gutters">
          <div className="col-md-8">

              <Card.Img src={Main1} />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h1 className="card-title">JESTER</h1>
              <p className="card-text">
              This is a full stack React App with GraphQL on a MongoDB database. It is a pseudo social media app centered around picture uploading to match a challenge criteria. It is still a work in progress. It currently has: login/logout functionality, picture (URL) functionality, and likes tracked on submissions. 
              <br/>
              <br/>
              To Test:
              login: me@me.com || password: 12345678
              </p>
              <br/>
              <p className="card-text">
                <a className="text-muted" href= "http://jesterapp.herokuapp.com/">Deployed link     |  </a>
                <a className="text-muted" href= "https://github.com/WTRIII/jester">  Repo</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* new card ====================== */}
      <div className="card" >
        <div className="row no-gutters">
          <div className="col-md-8">
            
              <Card.Img src={Main2}  />
              
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h1 className="card-title">Book-It! Bookshelf</h1>
              <p className="card-text">
                A full stack; bookshelf inventory management system with a MySQL Database, Log-in and log-out functionality. With individually configurable user generated collections.
              </p>
              <br/>
              <p className="card-text">
                <a className="text-muted" href= "https://bookit-bookshelf.herokuapp.com/">Deployed link     |  </a>
                <a className="text-muted" href= "https://github.com/Mitchell-est-Robbins/Project2Group7">  Repo</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card" >
        <div className="row no-gutters">
          <div className="col-md-8">
            
              <Card.Img src={Mini1} />

          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h1 className="card-title">Retail Therapy</h1>
              <p className="card-text">
              API centered e-commerce app. Designed to elicit a positive emotional experience why shopping on Amazon. With dynamically generated generated cards based on user searches. PLUS that sweet motivational quote button. 
              </p>
              <br/>
              <p className="card-text">
                <a className="text-muted" href= "https://mitchell-est-robbins.github.io/Project1-TheAppenders/">Deployed link     |  </a>
                <a className="text-muted" href= "https://github.com/Mitchell-est-Robbins/Project1-TheAppenders">  Repo</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card" >
        <div className="row no-gutters">
          <div className="col-md-8">
            
              <Card.Img src={Mini5} />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h1 className="card-title">The Esoteric Knowledge Quiz</h1>
              <p className="card-text">
              A JavaScript only time-attack quiz with a point system. 
              </p>
              <br/>
              <p className="card-text">
                <a className="text-muted" href= "https://mitchell-est-robbins.github.io/TheQuiz.REDUX-MR/">Deployed link     |  </a>
                <a className="text-muted" href= "https://github.com/Mitchell-est-Robbins/TheQuiz.REDUX-MR">  Repo</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card" >
        <div className="row no-gutters">
          <div className="col-md-8">
            
              <Card.Img src={mini4} />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h1 className="card-title">MR Budget Buddy</h1>
              <p className="card-text">
              A fully functional PWA Online-offline budget tracker; on a MongoDB database.  
              </p>
              <br/>
              <p className="card-text">
                <a className="text-muted" href= "https://mr-offline-budget-buddy.herokuapp.com/">Deployed link     |  </a>
                <a className="text-muted" href= "https://github.com/Mitchell-est-Robbins/Online-Offline.Budget-Tracker-MR">  Repo</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card" >
        <div className="row no-gutters">
          <div className="col-md-8">
            
              <Card.Img src={Mini3} />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h1 className="card-title">MR Logistics Roster  </h1>
              <p className="card-text">
              A Node.js terminal specific personnel management system for a ficticious Sci-fi Mercenary Company. The Prompts are with inquirer and the database is MySQL. 
              </p>
              <br/>
              <p className="card-text">
              <a className="text-muted" href= "https://github.com/Mitchell-est-Robbins/12BootCampHomeworkMR-">  Repo</a>
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="card" >
        <div className="row no-gutters">
          <div className="col-md-8">
            
              <Card.Img src={Mini2} />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h1 className="card-title">MR Fitness-Tracker</h1>
              <p className="card-text">
              A fitness app to track workouts over time all on a MongoDB database
              </p>
              <br/>
              <p className="card-text">
                <a className="text-muted" href= "https://mr-workout-tracker.herokuapp.com/?id=61a699a51cf1540016e49571">Deployed link     |  </a>
                <a className="text-muted" href= "https://github.com/Mitchell-est-Robbins/NoSQL-workout-tracker-MR">  Repo</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      </div>

);}
