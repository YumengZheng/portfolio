/* eslint-disable */
import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import DesignChart from './DesignChart.js';

class BannerLeft extends Component {
  constructor(props){
    super(props)
    this.state = {
      clickHandleOn: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if(this.state.clickHandleOn){
      this.props.showLeftChartPage()
      this.setState({clickHandleOn:false})
      }
  }

  render() {
    let designChart;
    if(this.props.leftShowChart){
      designChart = <DesignChart />
    }
    if(!this.props.leftShowBackground){
      $('#ps').fadeOut(1500)
      $('#ai').fadeOut(1500)
      $('#id').fadeOut(1500)
      $('#designer').fadeOut(1500)
    }
    let background
    if(this.props.leftDisplayBackground){
      background =[<span id="designer" className="word">Designer</span>,
                  <img src="images/ps.png" alt="ps" id="ps" className="image"></img>,
                  <img src="images/ai.png" alt="ai" id="ai" className="image"></img>,
                  <img src="images/id.png" alt="id" id="id" className="image"></img>]
    }
    return (
      <div className={this.props.leftBannerClass} onClick={this.handleClick} id="left-banner">
          {background}
          {designChart}
          <img src="images/left-face.png" alt="left-face" className={this.props.leftImageClass} id="left-face"></img>
      </div>
    );
  }
}

export default BannerLeft;