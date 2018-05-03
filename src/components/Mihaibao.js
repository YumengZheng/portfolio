/* eslint-disable */
import React, { Component } from 'react';
import '../styles/Mihaibao.css';

class Mihaibao extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const width = document.body.clientWidth 
    let height;
    if(width>1240){
      height = {
        height: '1600px'
      }
    } else if(700<=width && width<=1240){
      height = {
        height: width*1.3
      }
    } else if(500<=width && width<=700){
      height = {
        height: width*2.9
      }
    } else if(0<=width && width<=500){
      height = {
        height: width*3
      }
    }

    let titleStyle;
    if(1240<width){
      titleStyle = {
        fontSize:'2em', 
        lineHeight: '40px'
      }
    } else if(900<=width && width<=1240){
      titleStyle = {
        fontSize:'1.6em', 
        lineHeight: '30px'
      }
    } else if(700<=width && width<=900){
      titleStyle = {
        fontSize:'1.4em', 
        lineHeight: '30px'
      }
    } else if(0<=width && width<=700){
      titleStyle = {
        fontSize:'1.4em', 
        lineHeight: '20px'
      }
    } 
    console.log(width)

    return (
      <div className="mihaibao-design" style={height}>
        <div className="mihaibao-design-banner-gif-box"><img src='./images/bags.gif' className="mihaibao-design-banner-gif"/></div>
        <img src='./images/mihaibaobanner.png' className="mihaibao-design-banner-image"/>
        <div className="mihaibao-design-part-two-box">
          <p className="mihaibao-design-text"><span style={titleStyle}>Mihaibao</span> is a fashion-ecommerce company that offers easy overseas shopping for China to shop the West online. Funded and backed by the UK Government, UK Royal Family, Paypal and eBay.</p>
          <div className='mihaibao-design-card'>
            <img src='./images/bcardback.png' className="mihaibao-design-bcard-back"/>
            <img src='./images/bcardfront.png' className="mihaibao-design-bcard-front"/>
          </div>
        </div>
        <div className='mihaibao-design-part-three-box'>
          <img src='./images/mihaibaobrandpage.png' className='mihaibao-design-brands'/>
          <img src='./images/mihaibaophone.png' className='mihaibao-design-phone' />
        </div>
        {/* <img src='./images/mihaibaophone.png' className='mihaibao-design-image'/> */}
      </div>
    );
  }
}

export default Mihaibao