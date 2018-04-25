/* eslint-disable */
import React, { Component } from "react";
import '../styles/Banner.css';
import $ from "jquery";
import CodingChart from "./CodingChart.js";

class BannerRight extends Component {
  constructor(props){
    super(props)
    this.state = {
      clickHandleOn: true,
      onHover: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.controlToolTip = this.controlToolTip.bind(this)
  }

  handleClick() {
    if(this.state.clickHandleOn){
    this.props.showRightChartPage()
    this.setState({clickHandleOn:false})
    }
  }

  handleMouseEnter(){
    this.setState({
      onHover: true
    })
  }

  handleMouseLeave(){
    this.setState({
      onHover: false
    })
  }

  controlToolTip(){
    let toolTip
    console.log('pass', this.state.onHover)
    this.state.onHover? toolTip = 'tooltip': toolTip = 'tooltip-none'
    console.log('pass', toolTip)
    return <div id='tooltip2' className= {toolTip}><span className='inner-box'>Click to see coding skills</span></div>
  }
  
  findTooltipPosition() {
    var tooltipSpan = document.getElementById('tooltip2');
    window.onmousemove = function (e) {
        var x = e.clientX,
            y = e.clientY;
        tooltipSpan.style.top = (y-40) + 'px';
        tooltipSpan.style.left = x + 'px';
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
    let findTooltipPosition
    if(this.state.onHover){
      findTooltipPosition = this.findTooltipPosition()
    }
    let fontColor
    this.state.onHover? fontColor = {color: 'white', position: 'absolute'} : fontColor = {color: 'rgb(71, 70, 71)'}
    return (
      <div className={this.props.rightBannerClass} 
           onClick={this.handleClick}
           onMouseEnter={this.handleMouseEnter} 
           onMouseLeave={this.handleMouseLeave}>
          <span id="programmer" className="word" style={fontColor}>Programmer</span>
          <span id="react" className="word">React.js</span>
          <span id="mongo" className="word">MongoDB</span>
          <span id="node" className="word">Node.js</span>
          {this.controlToolTip()}
          {findTooltipPosition}
          {codingChart}
          <img src="images/right-face2.png" alt="left-face" className={this.props.rightImageClass} id="right-face" ></img>
      </div>
    );
  }
}

export default BannerRight