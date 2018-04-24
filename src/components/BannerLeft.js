/* eslint-disable */
import React, { Component } from 'react';
import '../styles/Banner.css';
import $ from 'jquery';
import DesignChart from './DesignChart.js';

class BannerLeft extends Component {
  constructor(props){
    super(props)
    this.state = {
      clickHandleOn: true,
      onHover: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.constrolBackground = this.constrolBackground.bind(this)
  }

  handleClick() {
    if(this.state.clickHandleOn){
      this.props.showLeftChartPage()
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

  constrolBackground(){
    let background
    let fontColor
    this.state.onHover? fontColor = {color: 'white', position: 'absolute'} : fontColor = {color: 'black'}
    if(this.props.leftShowBackground){
      background =[<span id="designer" style={fontColor} className="word">Designer</span>,
                  <img src="images/ps.png" alt="ps" id="ps" className="image"></img>,
                  <img src="images/ai.png" alt="ai" id="ai" className="image"></img>,
                  <img src="images/id.png" alt="id" id="id" className="image"></img>]
    }
    return background
  }

  controlToolTip(){
    let toolTip
    this.state.onHover? toolTip = {display: 'block', color: 'red', position: 'fixed'} : toolTip = {display: 'none'}
    return <div id='tooltip' style={toolTip} title="regular tooltip">Hover me</div>
  }

  findTooltipPosition() {
    var tooltipSpan = document.getElementById('tooltip');
    window.onmousemove = function (e) {
        var x = e.screenX,
            y = e.screenY;
            console.log(x,y)
        tooltipSpan.style.top = (y-40) + 'px';
        tooltipSpan.style.left = x + 'px';
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
    let findTooltipPosition
    if(this.state.onHover){
      findTooltipPosition = this.findTooltipPosition()
    }
    return (
      <div className={this.props.leftBannerClass} 
           onClick={this.handleClick} 
           onMouseEnter={this.handleMouseEnter} 
           onMouseLeave={this.handleMouseLeave}
           id="left-banner" >
           {this.controlToolTip()}
           {findTooltipPosition}
           {this.constrolBackground()}
           {designChart}
           <img src="images/left-face2.png" alt="left-face" className={this.props.leftImageClass} id="left-face"></img>
      </div>
    )
  }
}

export default BannerLeft;