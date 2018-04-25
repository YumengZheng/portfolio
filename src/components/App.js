/* eslint-disable */
import React, { Component } from 'react';
import '../styles/App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import EmmaDesign from './EmmaDesign.js';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/emma' component={EmmaDesign}/>
        </Switch>
      </div>
    );
  }
}

export default App;
