/* eslint-disable */
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
      leftShowArrow:false,
      leftDisplayBackground: true,
      rightBannerClass: "banner-right-cover",
      rightImageClass:'right-face',
      rightShowChart:false,
      rightShowBackground:true,
      rightShowArrow:false,
    }
    this.showRightChartPage = this.showRightChartPage.bind(this)
    this.showLeftChartPage = this.showLeftChartPage.bind(this)
    this.showLeftPage = this.showLeftPage.bind(this)
  }

  showRightChartPage() {
    this.setState({
      leftBannerClass:"banner-cover banner-cover-disappear",
      rightShowBackground:false,
      rightBannerClass: 'banner-right-cover banner-right-cover-click',
      rightImageClass: 'right-face right-face-click'
    })
    setTimeout(() => {
      this.setState({
        rightShowChart:true,
        rightShowArrow:true,
        leftDisplayBackground:false
      })
    },1500)
    $("#left-face").addClass('left-face-click')
  }

  showLeftChartPage() {
    this.setState({
      rightBannerClass: "banner-right-cover banner-right-cover-disappear",
      leftShowBackground: false,
      leftBannerClass: 'banner-cover banner-cover-click',
      leftImageClass: 'left-face left-face-click',
    })
    setTimeout(() => {
      this.setState({
        leftShowChart:true,
      })
    },1500)
  }

  showLeftPage() {
    this.setState({
      rightBannerClass: "banner-right-cover banner-right-cover-disappear",
      rightShowChart: false,
      rightShowArrow: false,
      leftBannerClass:"banner-cover banner-cover-click",
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
          showLeftChartPage={this.showLeftChartPage} 
          leftBannerClass={this.state.leftBannerClass}
          leftImageClass={this.state.leftImageClass}
          leftShowChart={this.state.leftShowChart}
          leftShowBackground={this.state.leftShowBackground}
          leftShowArrow={this.state.leftShowArrow}
          leftDisplayBackground={this.state.leftDisplayBackground}
          />
          <BannerRight 
          show={this.state.showRightImage} 
          showLeftPage={this.showLeftPage} 
          bannerRightCoverDisappear={this.state.hideRightBannerClass}  
          showRightChartPage={this.showRightChartPage} 
          rightBannerClass={this.state.rightBannerClass}
          rightImageClass={this.state.rightImageClass}
          rightShowChart={this.state.rightShowChart}
          rightShowBackground={this.state.rightShowBackground}
          rightShowArrow={this.state.rightShowArrow}
          />
        </div>
      </div>
    );
  }
}

export default App;
