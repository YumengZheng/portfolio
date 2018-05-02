/* eslint-disable */
import React, { Component } from 'react';
import '../styles/Project.css';
import $ from 'jquery';

const LastestProject = ({url, image, name, tech}) =>{
  const width = document.body.clientWidth 
  let projectStyle;
  if (width>=1240){
    projectStyle = {
     width: '300px',
     height: '250px',
     fontSize: '0.7em'}
  } else if(700<width && width<1240){
     projectStyle = {
      width: width*0.25,
      height: width*0.2,
      fontSize: '0.7em'}
  } else if(600<width && width<700){
    projectStyle = {
      width: width*0.6,
      height: width*0.5,
     fontSize: '1.2em'}
  } else if(width <= 600){
    projectStyle = {
      width: width*0.6,
      height: width*0.5,
      fontSize: '0.9em'}
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