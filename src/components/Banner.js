/* eslint-disable */
import React, { Component } from 'react';
import '../styles/Banner.css';
import ArrowContainer from './Arrow.js';
import BannerLeftContainer from './BannerLeft.js';
import BannerRightContainer from './BannerRight.js';
import $ from 'jquery';
import store from '../redux/store.js';
import actions from '../redux/actions/banner-actions'
import { connect } from 'react-redux';


class Banner extends Component {
  constructor(props){
    super(props)
    this.showRightChartPage = this.showRightChartPage.bind(this)
    this.showLeftChartPage = this.showLeftChartPage.bind(this)
    this.showLeftPage = this.showLeftPage.bind(this)
    this.showRightPage = this.showRightPage.bind(this)
  }

  showRightChartPage() {
    store.dispatch(actions.changeLeftBannerClass("banner-left-cover banner-left-cover-disappear"))
    store.dispatch(actions.changeLeftShowBackground(false))
    store.dispatch(actions.changeRightBannerClass('banner-right-cover banner-right-cover-click'))
    store.dispatch(actions.changeRightShowBackground(false))
    store.dispatch(actions.changeRightImageClass('right-face right-face-shrink'))
    store.dispatch(actions.changeRightImageClass('right-face right-face-shrink'))
    store.dispatch(actions.changeRightArrow(true))
    setTimeout(() => {
      store.dispatch(actions.changeLeftBannerClass("banner-left-cover-click banner-left-move-off-screen"))
      store.dispatch(actions.changeRightShowChart(true))
      store.dispatch(actions.changeShowArrow(true))
    },1000)
    $("#left-face").addClass('left-face-shrink')
  }

  showLeftChartPage() {
    store.dispatch(actions.changeLeftBannerClass('banner-left-cover banner-left-cover-click'))
    store.dispatch(actions.changeLeftShowBackground(false))
    store.dispatch(actions.changeLeftImageClass('left-face left-face-shrink'))
    store.dispatch(actions.changeRightBannerClass( "banner-right-cover banner-right-cover-disappear"))
    store.dispatch(actions.changeLeftArrow(true))
    setTimeout(() => {
      store.dispatch(actions.changeLeftShowChart(true))
      store.dispatch(actions.changeRightShowBackground(false))
      store.dispatch(actions.changeRightBannerClass("banner-right-cover-click banner-right-move-off-screen"))
      store.dispatch(actions.changeShowArrow(true))
    }, 1000)
    $("#right-face").addClass('right-face-shrink')
  }

  showLeftPage() {
    store.dispatch(actions.changeLeftBannerClass("banner-left-cover banner-left-cover-click banner-left-back-to-screen"))
    store.dispatch(actions.changeLeftShowBackground(false))
    store.dispatch(actions.changeLeftShowChart(true))
    store.dispatch(actions.changeRightBannerClass("banner-right-cover banner-right-cover-click banner-right-move-off-screen"))
    store.dispatch(actions.changeRightArrow(false))
    store.dispatch(actions.changeLeftArrow(true))
  }

  showRightPage() {
    store.dispatch(actions.changeLeftBannerClass("banner-left-cover banner-left-cover-click banner-left-move-off-screen"))
    store.dispatch(actions.changeRightBannerClass("banner-right-cover banner-right-cover-click banner-right-back-to-screen"))
    store.dispatch(actions.changeRightShowBackground(false))
    store.dispatch(actions.changeRightShowChart(true))
    store.dispatch(actions.changeRightArrow(true))
    store.dispatch(actions.changeLeftArrow(false))
  }

  render() {
    let arrow;
    if(this.props.showArrow){
      arrow = <ArrowContainer showLeftPage={this.showLeftPage} 
              showRightPage={this.showRightPage} />
    }
    let bannerStyle = {}
    if(window.innerWidth<=1240){
      bannerStyle = {
        height:window.innerWidth*0.48}
    }
    return (
        <div className="banner" style = {bannerStyle}>
         {arrow}
          <BannerLeftContainer 
          showLeftChartPage={this.showLeftChartPage} />
          <BannerRightContainer 
          showRightChartPage={this.showRightChartPage} />
        </div>
    );
  }
}

var mapStateToProps = (state) => ({
  showArrow: state.showArrow,
});

var mapDispatchToProps = (dispatch) => ({

});

var BannerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Banner);

export default BannerContainer;
