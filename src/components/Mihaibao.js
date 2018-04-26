/* eslint-disable */
import React, { Component } from 'react';
import '../styles/Mihaibao.css';

class Mihaibao extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="mihaibao-design">
        <div className="mihaibao-design-banner-gif-box"><img src='./images/bags.gif' className="mihaibao-design-banner-gif"/></div>
        <img src='./images/mihaibaobanner.png' className="mihaibao-design-banner-image"/>
        <div className="mihaibao-design-part-two-box">
          <p className="mihaibao-design-text"><span style={{fontSize:'2em', lineHeight: '40px'}}>Mihaibao</span> is a fashion-ecommerce company that offers easy overseas shopping for China to shop the West online. Funded and backed by the UK Government, UK Royal Family, Paypal and eBay.</p>
          <img src='./images/bcardback.png' className="mihaibao-design-bcard-back"/>
          <img src='./images/bcardfront.png' className="mihaibao-design-bcard-front"/>
        </div>
        <div className='mihaibao-design-part-three-box'>
          <img src='./images/mihaibaobrandpage4.png' className='mihaibao-design-brands'/>
          <img src='./images/mihaibaophone2.png' className='mihaibao-design-phone' />
        </div>
        {/* <img src='./images/mihaibaophone.png' className='mihaibao-design-image'/> */}
      </div>
    );
  }
}

export default Mihaibao