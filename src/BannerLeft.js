import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import DesignChart from './DesignChart.js';

class BannerLeft extends Component {
  constructor(props){
    super(props)
    this.state = {
      bannerClass: 'banner-cover',
      imageClass: 'left-face',
      showChart: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
     this.setState({
       bannerClass: 'banner-cover banner-cover-click ',
       imageClass: 'left-face left-face-click'
     })
     this.props.toggleRightImage()
     setTimeout(()=>{
      this.setState({
        showChart:true
      })
     },1500)
     $('#ps').fadeOut(1500)
     $('#ai').fadeOut(1500)
     $('#id').fadeOut(1500)
     $('#designer').fadeOut(1500)
  }



  render() {
    console.log(this.state.bannerClass+" "+this.props.hideBannerClass)
    let designChart;
    if(this.state.showChart){
      designChart = <DesignChart />
    }

    return (
      <div className={this.state.bannerClass+" "+this.props.hideBannerClass} onClick={this.handleClick}>
          <span id="designer" className="word">Designer</span>
          <img src="images/ps.png" alt="ps" id="ps" className="image"></img>
          <img src="images/ai.png" alt="ai" id="ai" className="image"></img>
          <img src="images/id.png" alt="id" id="id" className="image"></img>
          {designChart}
          <img src="images/left-face.png" alt="left-face" className={this.state.imageClass} id="left-face"></img>
      </div>
    );
  }
}

export default BannerLeft;