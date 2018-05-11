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
        height: '1600px'
      }
    } else if(700<=width && width<=1240){
      height = {
        height: width*1.3
      }
    } else if(500<=width && width<=700){
      height = {
        height: width*2.9
      }
    } else if(0<=width && width<=500){
      height = {
        height: width*3
      }
    }
console.log('ppppppp')
    return (
      <div className="travelbrite" style={height}>
        <img src='./images/travel-brite.png' className=''/>
      </div>
    );
  }
}

export default TravelBrite