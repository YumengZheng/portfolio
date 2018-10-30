/* eslint-disable */
import React, { Component } from 'react';
import '../styles/Hero.css';

class Hero extends Component {
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
    return (
      <div className="hero">
        <a href="https://www.hero.tv/" target="_blank" className="hero-title">Hero</a>
        <p className="hero-description">Hero is a platform for interactive entertainment, connecting audiences with live broadcasts. </p>
        <a href="https://www.hero.tv/" target="_blank" className="hero-title-small">Hero Trivia Game</a>
        <p className="hero-description">Developer side: developers can create trivia games on Hero developer portal by typing in trivia questions, options, answers and duration.</p>
        <iframe className="hero-video-one" src="https://www.youtube.com/embed/_O4T7Qsdz14" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <p className="hero-description">Client side: by clicking on "push trivia live" button in Hero developer portal, developers can spawn a trivia game and the game will show on the client side in real time. 
        Users can see live time data like the number of votes of each option, if the user's answer is correct, total number of participats, etc.  </p>
        <iframe className="hero-video-one" src="https://www.youtube.com/embed/oSVyS7_Psrc?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    );
  }
}

export default Hero