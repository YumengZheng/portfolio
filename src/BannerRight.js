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
      showChart:false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      bannerClass: 'banner-right-cover banner-right-cover-click',
      imageClass: 'right-face right-face-click'
    })
    this.props.toggleLeftImage()
    setTimeout(()=>{
     this.setState({
       showChart:true
     })
    },1500)
    $('#mongo').fadeOut(1500)
    $('#react').fadeOut(1500)
    $('#node').fadeOut(1500)
 }

  render() {
    let codingChart;
    if(this.state.showChart){
      codingChart = <CodingChart />
    }
    return (
      <div className={this.state.bannerClass} onClick={this.handleClick}>
        <div className="banner">
          <span id="mongo" className="word">MongoDB</span>
          <span id="react" className="word">React.js</span>
          <span id="node" className="word">Node.js</span>
          {codingChart}
          <img src="images/right-face.png" alt="left-face" className={this.state.imageClass} ></img>
        </div>
      </div>
    );
  }
}

export default BannerRight;