/* eslint-disable */
import React, { Component } from "react";
import "./App.css";

class Arrow extends Component {
  constructor(props){
    super(props)
    this.state = {
      arrowClass:'',
      showRightArrow: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
 }

  render() {
    let arrow;
    if(this.state.rightArrow){
      arrow = <img src="images/arrow.gif" alt="arrow" id={this.state.arrowClass} onClick={this.handleArrowClick}/>
    }
    return (
      <div className={this.state.arrowClass} onClick={this.handleClick}>
          {arrow}
      </div>
    );
  }
}

export default Arrow