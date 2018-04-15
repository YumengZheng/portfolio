/* eslint-disable */
import React, { Component } from "react";
import "./App.css";

class Arrow extends Component {
  constructor(props){
    super(props)
    this.state = {
      arrowClass:'arrow-right',
      showRightArrow: true
    }
    this.handLeftArrowClick = this.handLeftArrowClick.bind(this)
  }

  handLeftArrowClick(){
    this.props.showLeftPage()
    this.setState({
      arrowClass:"arrow-right arrow-right-click"
    })
  }

  render() {
    let arrow;
    if(this.state.showRightArrow){
      arrow = <img src="images/arrow1.png" alt="arrow" id="arrow" />
    }
    return (
      <div className={this.state.arrowClass} onClick={this.handLeftArrowClick}>
          {arrow}
      </div>
    );
  }
}

export default Arrow