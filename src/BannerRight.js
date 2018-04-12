import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import CodingChart from './CodingChart.js';

class BannerRight extends Component {
  constructor(props){
    super(props)
    this.state = {
      bannerClass: 'banner-right-cover',
      imageClass: 'right-face',
      showChart:false,
      showArrow:false,
      clickHandleOn: true
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleArrowClick = this.handleArrowClick.bind(this)
  }

  handleClick() {
    if(this.state.clickHandleOn){
      this.setState({
        bannerClass: 'banner-right-cover banner-right-cover-click',
        imageClass: 'right-face right-face-click',
        clickHandleOn: false
      })
      this.props.toggleLeftImage()
      setTimeout(()=>{
       this.setState({
         showChart:true,
         showArrow:true
       })
      },1500)
      $('#mongo').fadeOut(1500)
      $('#react').fadeOut(1500)
      $('#node').fadeOut(1500)
      $('#programmer').fadeOut(1500)
    //  setTimeout(()=>{
    //   $('#ps').hide()
    //   $('#ai').hide()
    //   $('#id').hide()
    //   $('#designer').hide()
    //   $('#left-face').css({
    //     'width':'30%',
    //     'margin':'auto 30px 0 auto'
    //   })
    //  }, 1000)
    }
 }

 handleArrowClick() {
    this.props.showLeftPage()
 }

  render() {
    let codingChart;
    if(this.state.showChart){
      codingChart = <CodingChart />
    }
    let arrow;
    if(this.state.showArrow){
      arrow = <img src="images/arrow.gif" alt="arrow" id="arrow-right" onClick={this.handleArrowClick}/>
    }
    return (
      <div className={this.state.bannerClass+" "+this.props.bannerRightCoverDisappear} onClick={this.handleClick}>
          {arrow}
          <span id="programmer" className="word">Programmer</span>
          <span id="mongo" className="word">MongoDB</span>
          <span id="react" className="word">React.js</span>
          <span id="node" className="word">Node.js</span>
          {codingChart}
          <img src="images/right-face.png" alt="left-face" className={this.state.imageClass} ></img>
      </div>
    );
  }
}

export default BannerRight;