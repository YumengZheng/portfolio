/* eslint-disable */
import React, { Component } from "react";
import "./App.css";

class Arrow extends Component {
  constructor(props){
    super(props)
    this.handLeftArrowClick = this.handLeftArrowClick.bind(this)
  }

  handLeftArrowClick(){
    this.props.showLeftPage()
  }

  render() {
    let rightArrow;
    if(this.props.rightShowArrow){
      rightArrow = <img src="images/arrow1.png" alt="arrow" id="right-arrow" onClick={this.handLeftArrowClick}/>
    }
    let leftArrow;
    if(this.props.leftShowArrow){
      leftArrow = <img src="images/arrow2.png" alt="arrow" id="left-arrow" onClick={this.handRightArrowClick} />
    }
    return (
      <div className="arrow">
        <div className="right-arrow-outter-box">
          {rightArrow}
        </div>
        <div  className="left-arrow-outter-box">
          {leftArrow}
          </div>
      </div>
    );
  }
}

export default Arrow