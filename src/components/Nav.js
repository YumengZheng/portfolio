/* eslint-disable */
import React, { Component } from 'react';
import '../styles/Nav.css';

class Nav extends Component {
  constructor(props){
    super(props)
    this.handleAboutClick = this.handleAboutClick.bind(this)
    this.handleProjectsClick = this.handleProjectsClick.bind(this)
    this.handleContactClick = this.handleContactClick.bind(this)
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this)
  }

  handleAboutClick(){
    document.getElementById('about').scrollIntoView();
  }
  handleProjectsClick(){
    document.getElementById('projects').scrollIntoView();
  }
  handlePortfolioClick(){
    document.getElementById('portfolio').scrollIntoView();
  }
  handleContactClick(){
    document.getElementById('contact').scrollIntoView();
  }

  showNavOptions(){
    let url = window.location.href
    let temp = url.split("/")
    if(temp[4] === ''){
      return  <div className="nav-inner-box">
                <span className="nav-option" onClick={this.handleAboutClick}>About</span>
                <span className="nav-option" onClick={this.handleProjectsClick}>Projects</span>
                <span className="nav-option" onClick={this.handlePortfolioClick}>Portfolio</span>
                <span className="nav-option" onClick={this.handleContactClick}>Contact</span>
              </div>
    }
  }
  render() {
    return (
      <div className="nav" id='nav'>
        <div className="logo-box">
          <a href="http://ivyzheng.us/" className="logo-inner-box"><img src="images/logo.png" className="logo"/></a>
        </div>
        <div className="nav-outter-box">
          {this.showNavOptions()}
        </div>
      </div>
    );
  }
}

export default Nav;