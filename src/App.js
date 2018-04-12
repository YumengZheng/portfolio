import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import BannerLeft from './BannerLeft.js';
import BannerRight from './BannerRight.js';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      hideBannerClass:"",
      hideRightBannerClass:""
    }
    this.toggleLeftImage = this.toggleLeftImage.bind(this)
    this.toggleRightImage = this.toggleRightImage.bind(this)
    this.showLeftPage = this.showLeftPage.bind(this)
  }

  toggleLeftImage() {
    this.setState({
      hideBannerClass:"banner-cover-disappear"
    })
  }

  toggleRightImage() {
    this.setState({
      hideRightBannerClass:"banner-right-cover-disappear"
    })
  }

  showLeftPage() {
    this.setState({
      hideBannerClass:"banner-cover-click",
      hideRightBannerClass:"banner-right-cover-disappear"
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="banner">
          <BannerLeft show={this.state.showLeftImage}  toggleRightImage={this.toggleRightImage} hideBannerClass={this.state.hideBannerClass}/>
          <BannerRight show={this.state.showRightImage} toggleLeftImage={this.toggleLeftImage} bannerRightCoverDisappear={this.state.hideRightBannerClass}  showLeftPage={this.showLeftPage} />
        </div>
      </div>
    );
  }
}

export default App;
