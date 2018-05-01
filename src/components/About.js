/* eslint-disable */
import React, { Component } from 'react';
import '../styles/About.css';
import $ from 'jquery';
import LastestProject from './Projects.js'; 


class About extends Component {
  constructor(props){
    super(props)
    this.state = {
      showArrow:true
    }
    this.canvas = this.canvas.bind(this)
    this.handleArrowClick = this.handleArrowClick.bind(this)
    this.showArrow =  this.showArrow.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  canvas(){
    window.onload = function() {
				var theCanvas = document.getElementById('canvas');
				if (theCanvas && theCanvas.getContext) {
					var ctx = theCanvas.getContext("2d");
          if (ctx) {
						ctx.lineWidth = 1;
						ctx.strokeStyle="black";
						ctx.lineJoin="miter";
            ctx.beginPath();
            ctx.setLineDash([5,5]);
						ctx.moveTo(230,250);
						ctx.lineTo(230,350);
						ctx.lineTo(665,350);
						ctx.moveTo(1000,350);
						ctx.lineTo(1100,350);
						ctx.moveTo(300,810);
            ctx.lineTo(300,990);
            ctx.lineTo(1050,990);
            ctx.lineTo(1050,950);
						ctx.moveTo(760,955);
            ctx.lineTo(760,990);
						ctx.moveTo(180,810);
            ctx.lineTo(180,1070);
            ctx.lineTo(300,1070);
						ctx.moveTo(620,1070);
            ctx.lineTo(1050,1070);
            ctx.lineTo(1050,1120);
						ctx.moveTo(1050,1430);
            ctx.lineTo(1050,1650);
            ctx.lineTo(600,1650);
						ctx.moveTo(210,1650);
            ctx.lineTo(150,1650);
            ctx.lineTo(150,1850);
            ctx.lineTo(600,1850);
						ctx.moveTo(210,1650);
            ctx.lineTo(150,1650);
            ctx.lineTo(150,1850);
            ctx.lineTo(600,1850);
						ctx.moveTo(800,1900);
            ctx.lineTo(800,2050);
            ctx.moveTo(350,2050);
            ctx.lineTo(950,2050);
            ctx.moveTo(150,2150);
            ctx.lineTo(150,2330);
            ctx.lineTo(460,2330);
            ctx.lineTo(460,2300);
            ctx.moveTo(870,2260);
            ctx.lineTo(1050,2260);
            ctx.lineTo(1050,2500);
            ctx.lineTo(875,2500);
            ctx.moveTo(555,2620);
            ctx.lineTo(555,2750);
            ctx.moveTo(400,2750);
            ctx.lineTo(800,2750);
            ctx.moveTo(1000,2750);
            ctx.lineTo(1150,2750);
            ctx.lineTo(1150,2650);
            ctx.moveTo(1110,2700);
            ctx.lineTo(1150,2650);
            ctx.lineTo(1190,2700);
            ctx.stroke();	
          }
				}
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  handleScroll(event) {
    var scrollTop = $(window).scrollTop()
    if(scrollTop >= 400){
      this.setState({
        showArrow:false
      }) 
    } else {
      this.setState({
        showArrow:true
      }) 
    }
  }
  
  handleArrowClick(){
    document.getElementById('about').scrollIntoView();
  }
  handleBottomArrowClick(){
    document.getElementById('nav').scrollIntoView();
  }
  showArrow(){
    if(this.state.showArrow){
      return  <div className='down-arrow-box' ><img src='images/downarrow1.gif' className='down-arrow' onClick={this.handleArrowClick}/></div>
    }
  }

  render() {
    this.canvas()
    let aboutStyle = {}
    console.log('w',window.innerWidth<1240)
    if(415<=window.innerWidth && window.innerWidth<1240){
      console.log('pass1')
      aboutStyle = {
        width: window.innerWidth,
        height:window.innerWidth*2.2}
    } else if (window.innerWidth>=1240){
      console.log('pass2')
      aboutStyle = {
        width: '1240px',
        height: '2710px'}
    }

    return (
      <div className='about' id='about' style={aboutStyle}>
          {this.showArrow()}
        <div className='about-part-one'>
            <p className='about-part-one-text'><span style={{fontSize: "2.5em"}}>I’m Ivy</span><br/>I am a software engineer based in San Francisco</p>
            <img className='about-part-one-image' src="images/bridge.png" alt="bridge-image" />
        </div>
        <div className='about-part-two'>
          <p className='about-part-two-text' id='projects'>My latest coding projects</p>
          <div className="coding-projects-outter-box" >
              <LastestProject url="http://ivyzheng.us/minesweeper/" image="images/minesweeper.png" name="Mine Sweeper Game" tech="React, Redux, Javascript, Html, Css"/>   
              <LastestProject url="http://pickawatermelon.com/" image="images/watermelon.png" name="Watermelon University" tech="Javascript, JQuery, Html, Css"/>
          </div>    
        </div>
        <div className='about-part-three'>
            <p className='about-part-three-text'>I design websites and t-shirts</p>
            <img className='about-part-three-image-web' src="images/web.png" alt="web-image" />
            <a href="https://www.ivytees.com/" className='about-part-three-image-tee-box'  target="_blank" ><img className='about-part-three-image-tee' src="images/tee.png" alt="tee-image" /></a>
        </div>
        <div className='about-part-four' id='portfolio'>
            <p className='about-part-four-text'>My latest design project</p>
            <div className="design-projects-outter-box">
              <LastestProject url="http://ivyzheng.us/#/mihaibao/" image="images/mihaibaoshot1.png" name="Mihaibao" tech="Illustrator, Photoshop"/>
              <LastestProject url="http://ivyzheng.us/#/emma/" image="images/emmashot1.png" name="Emma App" tech="Illustrator, Photoshop"/>
              <LastestProject url="http://zhengyumeng.com/" image="images/fashion1.png" name="Fashion Design Portfolio" tech="Illustrator, Photoshop, Html, Css"/>
            </div>   
        </div>  
        <div className='about-part-five'>
            <a href="https://www.youtube.com/watch?v=TYmfoCp1S44" target="_blank" className="about-part-five-tv-box"><img src="https://media.giphy.com/media/8MAxZ9Z9aqW40M5Jw7/giphy.gif"  className='about-part-five-image-gif' frameBorder="0"  allowFullScreen /></a>
            <img className='about-part-five-image-tv' src='./images/tv.png' />
            <p className='about-part-five-text'>I like dancing</p>
            <img className='about-part-five-image-dance' src="images/dance.png" alt="dance-image" />
        </div>
        <div className='about-part-six'>
            <p className='about-part-six-text'>I am an expert at eatting Chinese food <br/>and playing Exploding Kittens</p>
            <img className='about-part-six-image-game' src="images/game.png" alt="game-image" />
            <img className='about-part-six-image-food' src="images/food.png" alt="food-image" />
        </div>
        <div className='about-part-seven' id='contact'>
            <p className='about-part-seven-text'>You can contact me through email<br/>or find me on Linkedin and Github</p>
            <div className='about-part-seven-image-outter-box'>
              <a href="mailto:zhengyumeng1125@gmail.com?Subject=Hello%20again" target="_top" className='about-part-seven-image-box'><img className='about-part-seven-image' src="images/flight.png" alt="flight-image" /></a>
              <a href='https://www.linkedin.com/in/ivy-zheng-8a604891/' target="_blank" className='about-part-seven-image-box'><img className='about-part-seven-image' src="images/linkedin.png" alt="linkedin-image" /></a>
              <a href='https://github.com/YumengZheng' target="_blank" className='about-part-seven-image-box'><img className='about-part-seven-image' src="images/github.png" alt="github-image" /></a>
            </div>
        </div>
        <div className='about-part-eight'>
            <p className='about-part-eight-text'>Thank you for reading</p>
            <p className='about-part-eight-text-two'>Back to the top</p>
            <div className='about-part-eight-arrow' onClick={this.handleBottomArrowClick}></div>
        </div>
            <canvas id="canvas" width="1300" height="2840">fall back</canvas>
      </div>
    );
  }
}

export default About;