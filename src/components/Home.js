/* eslint-disable */
import React, { Component } from 'react';
import '../styles/App.css';
import Banner from './Banner.js';
import About from './About.js';

const Home = () => {
    return (
      <div className="home">
        <Banner />
        <About />
      </div>
    );
}

export default Home;