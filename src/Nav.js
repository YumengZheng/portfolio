/* eslint-disable */
import React, { Component } from 'react';
import './App.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-outter-box">
          <div className="nav-inner-box">
            <span className="nav-option">About</span>
            <span className="nav-option">Project</span>
            <span className="nav-option">Portfolio</span>
            <span className="nav-option">Contact</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;