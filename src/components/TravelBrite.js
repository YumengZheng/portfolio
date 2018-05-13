/* eslint-disable */
import React, { Component } from 'react';
import '../styles/TravelBrite.css';

class TravelBrite extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const width = document.body.clientWidth 
    
    let height;
    if(width>1240){
      height = {
        height: '800px'
      }
    } else if(700<=width && width<=1240){
      height = {
        height: width*0.8
      }
    } else if(500<=width && width<=700){
      height = {
        height: width*2
      }
    } else if(0<=width && width<=500){
      height = {
        height: width*2.3
      }
    }

    return (
      <div className="travelbrite" style={height}>
        <div className='travelbrite-text-box'><p className='travelbrite-text'><span className='travelbrite-text-name'>TravelBrite</span>is a project I worked on with the goal of designing a back-end to handle 1000 requests per second. I started the project by seeding my 10 million rows of questions and answer data into MongoDB and Postgres, in order to test which database would perform the fastest for my needs.  I implemented Redis as well as connected Mongo pool to decrease the query time. I used New Relic and artillery.io to stress test my architecture at every step and deployed the project on AWS. 
        <br></br><br></br><span style={{fontWeight: 'bold'}}>Technology used in the project:</span><br></br> <span style={{color:'#44A685'}}>Node.js, Express, MongoDB, Mongoose, Postgres, Pg-promise, Docker, Redis, Newrelic, Redis</span></p></div>
        <div className='travelbrite-image-box'><img src='./images/travel-brite-big1.png' className='travelbrite-image'/></div>
      </div>
    );
  }
}

export default TravelBrite