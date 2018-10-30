/* eslint-disable */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import '../styles/App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import EmmaDesign from './EmmaDesign.js';
import Mihaibao from './Mihaibao.js';
import TravelBrite from './TravelBrite.js';
import Hero from './Hero.js';


const App = () => {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/emma'component={EmmaDesign}/>
          <Route path='/mihaibao' component={Mihaibao}/>
          <Route path='/travelbrite' component={TravelBrite}/>
          <Route path='/hero' component={Hero}/>
        </Switch>
      </div>
    )
}

export default App;
