/* eslint-disable */
import React, { Component } from 'react';
import '../styles/About.css';
import $ from 'jquery';
import LastestProject from './Projects.js'; 


class About extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
    this.canvas=this.canvas.bind(this)
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
						ctx.moveTo(230,220);
						ctx.lineTo(230,350);
						ctx.lineTo(690,350);
						ctx.moveTo(970,350);
						ctx.lineTo(1100,350);
						ctx.moveTo(300,800);
            ctx.lineTo(300,990);
            ctx.lineTo(1050,990);
            ctx.lineTo(1050,930);
						ctx.moveTo(760,930);
            ctx.lineTo(760,990);
						ctx.moveTo(180,800);
            ctx.lineTo(180,1060);
            ctx.lineTo(300,1060);
						ctx.moveTo(600,1060);
            ctx.lineTo(1050,1060);
            ctx.lineTo(1050,1100);
						ctx.moveTo(1050,1400);
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
            ctx.stroke();	
          }
				}
    }
  }

  render() {
    this.canvas()
    return (
      <div className='about'>
        <div className='about-part-one'>
            <p className='about-part-one-text'><span style={{fontSize: "2.5em"}}>I’m Ivy</span><br/>I am a software engineer based in San Francisco</p>
            <img className='about-part-one-image' src="images/bridge.png" alt="bridge-image" />
        </div>
        <p className='about-part-two-text'>My latest coding projects</p>
            <LastestProject />
        <div className='about-part-three'>
            <p className='about-part-three-text'>I design websites and t-shirts</p>
            <img className='about-part-three-image-web' src="images/web.png" alt="web-image" />
            <img className='about-part-three-image-tee' src="images/tee.png" alt="tee-image" />
        </div>
            <p className='about-part-four'>My latest design project</p>
            <LastestProject />
        <div className='about-part-five'>
            <a href="https://www.youtube.com/watch?v=TYmfoCp1S44" target="_blank" className="about-part-five-tv-box"><img className='about-part-five-image-tv' src="images/tv.png" alt="tv-image" /></a>
            <p className='about-part-five-text'>I like dancing</p>
            <img className='about-part-five-image-dance' src="images/dance.png" alt="dance-image" />
        </div>
        <div className='about-part-six'>
            <p className='about-part-six-text'>I am an expert at eatting Chinese food <br/>and playing Exploding Kittens</p>
            <div className='about-part-six-image-box'>
              <img className='about-part-six-image-game' src="images/game.png" alt="dance-image" />
              <img className='about-part-six-image-food' src="images/food.png" alt="dance-image" />
            </div>

        </div>
            <canvas id="canvas" width="1300" height="3320">fall back</canvas>
      </div>
    );
  }
}

export default About;