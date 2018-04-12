import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import DesignChart from './DesignChart.js';

class BannerLeft extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
     this.props.showChartPage()
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
    return (
      <div className={this.props.leftBannerClass} onClick={this.handleClick}>
          <span id="designer" className="word">Designer</span>
          <img src="images/ps.png" alt="ps" id="ps" className="image"></img>
          <img src="images/ai.png" alt="ai" id="ai" className="image"></img>
          <img src="images/id.png" alt="id" id="id" className="image"></img>
          {designChart}
          <img src="images/left-face.png" alt="left-face" className={this.props.leftImageClass} id="left-face"></img>
      </div>
    );
  }
}

export default BannerLeft;