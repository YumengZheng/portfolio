/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import About from './components/About';
import Router, {Route, DefaultRoute}from 'react-router'


let routes = (
  <Route handler={App}>
    <DefaultRoute handler={App} />
  </Route>
)
ReactDOM.render(<App />, document.getElementById("root"));

