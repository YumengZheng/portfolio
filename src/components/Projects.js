/* eslint-disable */
import React, { Component } from 'react';
import '../styles/Project.css';
import $ from 'jquery';

class LastestProject extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
    
  }

  render() {
    return (
      <div className="project-box">
        <a href="http://pickawatermelon.com/" target="_blank" className="project-image-box"><img src="images/watermelon.png" alt="watermelon-image"  className="project-image"/></a>
        <p className="project-name">Watermelon University</p>
      </div>
    );
  }
}

export default LastestProject;