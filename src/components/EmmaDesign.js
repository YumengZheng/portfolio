/* eslint-disable */
import React, { Component } from 'react';
import '../styles/EmmaDesign.css';

class EmmaDesign extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="emma-design">
        <img src='./images/emma.png' className="emma-design-image"/>
      </div>
    );
  }
}

export default EmmaDesign