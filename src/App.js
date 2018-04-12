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
      leftBannerClass: "banner-cover",
      leftImageClass:'left-face',
      leftShowChart:false,
      leftShowBackground:true,
      hideRightBannerClass:""
    }
    this.toggleLeftImage = this.toggleLeftImage.bind(this)
    this.showChartPage = this.showChartPage.bind(this)
    this.showLeftPage = this.showLeftPage.bind(this)
  }

  toggleLeftImage() {
    this.setState({
      hideBannerClass:"banner-cover-disappear"
    })
  }

  showChartPage() {
    this.setState({
      hideRightBannerClass:"banner-right-cover-disappear",
      leftShowBackground:false,
      leftBannerClass: 'banner-cover banner-cover-click',
      leftImageClass: 'left-face left-face-click'
    })
    setTimeout(() => {
      this.setState({
        leftShowChart:true
      })
    },2000)
  }

  showLeftPage() {
    this.setState({
      leftBannerClass:"banner-cover banner-cover-click",
      hideRightBannerClass:"banner-right-cover-disappear",
      leftImageClass: 'left-face left-face-click',
      leftShowBackground:false,
      leftShowChart:true
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="banner">
          <BannerLeft 
          show={this.state.showLeftImage}  
          showChartPage={this.showChartPage} 
          leftBannerClass={this.state.leftBannerClass}
          leftImageClass={this.state.leftImageClass}
          leftShowChart={this.state.leftShowChart}
          leftShowBackground={this.state.leftShowBackground}
          />
          <BannerRight 
          show={this.state.showRightImage} 
          toggleLeftImage={this.toggleLeftImage} 
          bannerRightCoverDisappear={this.state.hideRightBannerClass}  
          showLeftPage={this.showLeftPage} />
        </div>
      </div>
    );
  }
}

export default App;
