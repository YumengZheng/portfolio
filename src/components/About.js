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
						ctx.lineJoin="round";
            ctx.beginPath();
            ctx.setLineDash([3,3]);
						ctx.moveTo(10,40);
						ctx.lineTo(500,40);
						ctx.lineTo(500,400);
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
            <p className='about-part-one-text'><span style={{"font-size": "2.5em"}}>I’m Ivy</span><br/>I am a software engineer based in San Francisco</p>
            <img className='about-part-one-image' src="images/bridge.png" alt="bridge-image" />
        </div>
            {/* <LastestProject /> */}
            <canvas id="canvas" width="1260" height="1320">fall back</canvas>
      </div>
    );
  }
}

export default About;