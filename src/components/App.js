/* eslint-disable */
import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import About from './About.js';
import {Switch, Route} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
