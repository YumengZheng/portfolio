import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import BannerLeft from './BannerLeft.js';
import BannerRight from './BannerRight.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      widthLeft: '50%'
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="banner">
          <BannerLeft  />
          <BannerRight />
        </div>
      </div>
    );
  }
}

export default App;
