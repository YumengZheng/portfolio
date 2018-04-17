/* eslint-disable */
import React, { Component } from "react";
import '../styles/Banner.css';
import $ from "jquery";
import CodingChart from "./CodingChart.js";

class BannerRight extends Component {
  constructor(props){
    super(props)
    this.state = {
      clickHandleOn: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if(this.state.clickHandleOn){
    this.props.showRightChartPage()
    this.setState({clickHandleOn:false})
    }
 }


  render() {
    let codingChart;
    if(this.props.rightShowChart){
      codingChart = <CodingChart />
    }
    if(!this.props.rightShowBackground){
      $('#mongo').fadeOut(1000)
      $('#react').fadeOut(1000)
      $('#node').fadeOut(1000)
      $('#programmer').fadeOut(1000)
    }
    return (
      <div className={this.props.rightBannerClass} onClick={this.handleClick}>
          <span id="programmer" className="word">Programmer</span>
          <span id="mongo" className="word">MongoDB</span>
          <span id="react" className="word">React.js</span>
          <span id="node" className="word">Node.js</span>
          {codingChart}
          <img src="images/right-face.png" alt="left-face" className={this.props.rightImageClass} id="right-face" ></img>
      </div>
    );
  }
}

export default BannerRight