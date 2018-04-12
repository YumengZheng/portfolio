import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import BannerLeft from './BannerLeft.js';
import BannerRight from './BannerRight.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showLeftImage:true,
      showRightImage:true,
      hideBannerClass:""
    }
    this.toggleLeftImage = this.toggleLeftImage.bind(this)
    this.toggleRightImage = this.toggleRightImage.bind(this)
  }

  toggleLeftImage() {
    this.setState({
      hideBannerClass:"banner-cover-disappear"
    })
  }

  toggleRightImage() {
    this.setState({
      showLeftImage:false
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="banner">
          <BannerLeft show={this.state.showLeftImage}  toggleRightImage={this.toggleRightImage} hideBannerClass={this.state.hideBannerClass}/>
          <BannerRight show={this.state.showRightImage} toggleLeftImage={this.toggleLeftImage} />
        </div>
      </div>
    );
  }
}

export default App;
