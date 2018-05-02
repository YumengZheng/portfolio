/* eslint-disable */
import React, { Component } from 'react';
import '../styles/Project.css';
import $ from 'jquery';

const LastestProject = ({url, image, name, tech}) =>{
  let projectStyle = {}
  console.log(window.innerWidth)
  if(500<=window.innerWidth && window.innerWidth<1240){
     projectStyle = {
      width: '260px',
      height: '220px'}
  } else if (window.innerWidth>=1240){
     projectStyle = {
      width: '300px',
      height: '250px'}
  } else if(window.innerWidth < 500){
    projectStyle = {
      width: '80%',
      height: window.innerWidth*0.6}
  }
    return (
      <div className="project-box" style={projectStyle}>
        <a href={url} target="_blank" className="project-link-box"><img src={image} alt={name}  className="project-image"/>
          <p className="project-name">{name}</p>
          <p className="project-tech">{tech}</p>
        </a>
      </div>
    );
}

export default LastestProject;