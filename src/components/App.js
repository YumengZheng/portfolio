/* eslint-disable */
import React, { Component } from 'react';
import '../styles/App.css';
import Nav from './Nav.js';
import Banner from './Banner.js';
import About from './About.js';

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Banner />
        <About />
      </div>
    );
  }
}

export default App;
