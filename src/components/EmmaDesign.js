/* eslint-disable */
import React, { Component } from 'react';
import '../styles/EmmaDesign.css';

class EmmaDesign extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const width = document.body.clientWidth 
    let height;
    if(700<=width){
      height = {height: width*2}
    } else if(500<width && width<=700){
      height = {height: width*3}
    } else if(0<=width && width<=500){
      height = {height: width*3.35}
    }
    return (
      <div className="emma-design" style={height}>
        <img src='./images/emma.png' className="emma-design-image"/>
      </div>
    );
  }
}

export default EmmaDesign