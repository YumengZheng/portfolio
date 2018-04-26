/* eslint-disable */
import React, { Component } from "react";
import '../styles/Arrow.css';

class Arrow extends Component {
  constructor(props){
    super(props)
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this)
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this)
  }

  handleLeftArrowClick(){
    this.props.showLeftPage()
  }

  handleRightArrowClick(){
    this.props.showRightPage()
  }

  render() {
    let rightArrow;
    if(this.props.rightShowArrow){
      rightArrow = <img src="images/arrow1.png" alt="arrow" id="right-arrow" onClick={this.handleLeftArrowClick}/>
    }
    let leftArrow;
    if(this.props.leftShowArrow){
      leftArrow = <img src="images/arrow2.png" alt="arrow" id="left-arrow" onClick={this.handleRightArrowClick} />
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