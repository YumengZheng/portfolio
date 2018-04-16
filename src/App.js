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
      leftBannerClass: "banner-cover",
      leftImageClass:'left-face',
      leftShowChart:false,
      leftShowBackground:true,
      leftDisplayBackground: true,
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
        leftDisplayBackground:false,
        showArrow: true
      })
    },1500)
    $("#left-face").addClass('left-face-click')
    setTimeout(()=>{
      this.setState({
        leftBannerClass:"banner-cover-click banner-right-face-click"
      })
    }, 3000);
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
      leftBannerClass:"banner-cover banner-cover-click banner-right-arrow-click",
      leftShowBackground:false,
      leftShowChart:true
    })
  }

  render() {
    let arrow;
    if(this.state.showArrow){
      arrow = <Arrow showLeftPage={this.showLeftPage} />
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
          leftDisplayBackground={this.state.leftDisplayBackground}
          />
          <BannerRight 
          show={this.state.showRightImage} 
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
