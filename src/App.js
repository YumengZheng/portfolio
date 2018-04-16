/* eslint-disable */
import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import BannerLeft from './BannerLeft.js';
import BannerRight from './BannerRight.js';
import Arrow from './Arrow.js';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      leftBannerClass: "banner-left-cover",
      leftImageClass:'left-face',
      leftShowChart:false,
      leftShowBackground: true,
      leftShowArrow:false,

      rightBannerClass: "banner-right-cover",
      rightImageClass:'right-face',
      rightShowChart:false,
      rightShowBackground:true,
      rightShowArrow:false,

      showArrow:false
    }
    this.showRightChartPage = this.showRightChartPage.bind(this)
    this.showLeftChartPage = this.showLeftChartPage.bind(this)
    this.showLeftPage = this.showLeftPage.bind(this)
    this.showRightPage = this.showRightPage.bind(this)
  }

  showRightChartPage() {
    this.setState({
      leftBannerClass:"banner-left-cover banner-left-cover-disappear",
      rightShowBackground:false,
      rightBannerClass: 'banner-right-cover banner-right-cover-click',
      rightImageClass: 'right-face right-face-shrink',
      rightShowArrow:true
    })
    setTimeout(() => {
      this.setState({
        rightShowChart:true,
        showArrow: true,
        leftShowBackground:false,
        leftBannerClass:"banner-left-cover-click banner-left-move-off-screen"
      })
    },1500)
    $("#left-face").addClass('left-face-shrink')
  }

  showLeftChartPage() {
    this.setState({
      rightBannerClass: "banner-right-cover banner-right-cover-disappear",
      leftShowBackground: false,
      leftBannerClass: 'banner-left-cover banner-left-cover-click',
      leftImageClass: 'left-face left-face-shrink',
      leftShowArrow:true
    })
    setTimeout(() => {
      this.setState({
        leftShowChart:true,
        showArrow: true,
        rightShowBackground:false,
        rightBannerClass:"banner-right-cover-click banner-right-move-off-screen"
      })
    }, 1500)
    $("#right-face").addClass('right-face-shrink')
  }

  showLeftPage() {
    this.setState({
      rightBannerClass: "banner-right-cover banner-right-cover-click banner-right-move-off-screen",
      leftBannerClass:"banner-left-cover banner-left-cover-click banner-left-back-to-screen",
      leftShowBackground:false,
      leftShowChart:true,
      rightShowArrow:false,
      leftShowArrow:true,
    })
  }

  showRightPage() {
    this.setState({
      leftBannerClass: "banner-left-cover banner-left-cover-click banner-left-move-off-screen",
      rightBannerClass:"banner-right-cover banner-right-cover-click banner-right-back-to-screen",
      rightShowBackground:false,
      rightShowChart:true,
      leftShowArrow:false,
      rightShowArrow:true,
    })
  }

  render() {
    let arrow;
    if(this.state.showArrow){
      arrow = <Arrow showLeftPage={this.showLeftPage} 
              showRightPage={this.showRightPage} 
              leftShowArrow={this.state.leftShowArrow}
              rightShowArrow={this.state.rightShowArrow}
              />
    }
    return (
      <div className="App">
        <Nav />
        <div className="banner">
         {arrow}
          <BannerLeft 
          show={this.state.showLeftImage}  
          showLeftChartPage={this.showLeftChartPage} 
          leftBannerClass={this.state.leftBannerClass}
          leftImageClass={this.state.leftImageClass}
          leftShowChart={this.state.leftShowChart}
          leftShowBackground={this.state.leftShowBackground}
          />
          <BannerRight 
          show={this.state.showRightImage}  
          showRightChartPage={this.showRightChartPage} 
          rightBannerClass={this.state.rightBannerClass}
          rightImageClass={this.state.rightImageClass}
          rightShowChart={this.state.rightShowChart}
          rightShowBackground={this.state.rightShowBackground}
          />
        </div>
      </div>
    );
  }
}

export default App;
