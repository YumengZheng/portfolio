/* eslint-disable */
import React, { Component } from 'react';
import '../styles/Project.css';
import $ from 'jquery';

const LastestProject = ({url, image, name, tech}) =>{
    return (
      <div className="project-box">
        <a href={url} target="_blank" className="project-link-box"><img src={image} alt={name}  className="project-image"/>
          <p className="project-name">{name}</p>
          <p className="project-tech">{tech}</p>
        </a>
      </div>
    );
}

export default LastestProject;