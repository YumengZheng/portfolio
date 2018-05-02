/* eslint-disable */
import React, { Component } from 'react';
import '../styles/Project.css';
import $ from 'jquery';

const LastestProject = ({url, image, name, tech}) =>{
  let projectStyle = {}
  if(700<window.innerWidth && window.innerWidth<1240){
     projectStyle = {
      width: window.innerWidth*0.25,
      height: window.innerWidth*0.2}
  } else if (window.innerWidth>=1240){
     projectStyle = {
      width: '300px',
      height: '250px'}
  } else if(window.innerWidth <= 700){
    projectStyle = {
      width: window.innerWidth*0.5,
      height: window.innerWidth*0.44}
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