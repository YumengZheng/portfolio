/* eslint-disable */
import React, { Component } from 'react';
import '../styles/Banner.css';
import $ from 'jquery';
import DesignChart from './DesignChart.js';
import { connect } from 'react-redux';
import store from '../redux/store.js';
import actions from '../redux/actions/banner-left-action'

class BannerLeft extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.constrolBackground = this.constrolBackground.bind(this)
    this.controlToolTip = this.controlToolTip.bind(this)
  }

  handleClick() {
    if(this.props.clickHandleOn){
      store.dispatch(actions.changeClickHandleOn(false))
      this.props.showLeftChartPage()
      }
  }

  handleMouseEnter(){
    store.dispatch(actions.changeOnHover(true))
  }

  handleMouseLeave(){
    store.dispatch(actions.changeOnHover(false))
  }

  constrolBackground(){
    let background
    let fontColor
    this.props.onHover? fontColor = {color: 'white', position: 'absolute'} : fontColor = {color: 'rgb(71, 70, 71)'}
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
    this.props.onHover? toolTip = 'tooltip-left': toolTip = 'tooltip-none'
    return <div id='tooltip' className= {toolTip} ><span className='inner-box'>Click to see design skills</span></div>
  }

  findTooltipPosition() {
    var tooltipSpan = document.getElementById('tooltip');
    window.onmousemove = function (e) {
        var x = e.clientX,
            y = e.clientY;
        tooltipSpan.style.top = (y-40) + 'px';
        tooltipSpan.style.left = (x-180) + 'px';
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
    if(this.props.onHover){
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

var mapStateToProps = (state) => ({
  clickHandleOn: state.clickHandleOn,
  onHover: state.onHover,
  leftBannerClass: state.leftBannerClass,
  leftImageClass: state.leftImageClass,
  leftShowChart: state.leftShowChart,
  leftShowBackground: state.leftShowBackground
});

var mapDispatchToProps = (dispatch) => ({

});

var BannerLeftContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BannerLeft);

export default BannerLeftContainer;

