/* eslint-disable */
import React, { Component } from 'react';
import '../styles/Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo-box">
          <a href="http://localhost:3000/" className="logo-inner-box"><img src="images/logo.png" className="logo"/></a>
        </div>
        <div className="nav-outter-box">
          <div className="nav-inner-box">
          <a href="http://localhost:3000/about"><span className="nav-option">About</span></a>
            <span className="nav-option">Projects</span>
            <span className="nav-option">Portfolio</span>
            <span className="nav-option">Contact</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;