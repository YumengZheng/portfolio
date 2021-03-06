/* eslint-disable */
import React, { Component } from 'react';
import '../styles/Banner.css';
import {Bar} from 'react-chartjs-2'

class DesignChart extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const yLabels = {
      0 : '', 2 : 'NEWBIE', 4 : 'TRYHARD', 6 : 'DESIGNER', 8 : 'NO-LIFE',
    }
    let fontSize = 18;
    let xfontSize = 12;
    let yfontSize = 12;
    // console.log('window',window.innerWidth)
    if(window.innerWidth <= 600){
      fontSize = 10;
      xfontSize = 8;
      yfontSize = 8;
    }
    return (
      <div className="design-chart">
       <Bar
       data={{
              labels: ["Illustrator", "Photoshop", "Sketching", "Indesign", "Rhino"],
              datasets:[
                {
                  label: 'Design Skills',
                  data: [7, 6, 6, 5, 4],
                  backgroundColor: [
                    '#709DC7',
                    '#44B3BB',
                    '#71C690',
                    '#D8B161',
                    '#C97587'
                  ],
                  borderColor: '#878787',
                  borderWidth:1,
                  borderSkipped: 'top'
                }
              ]
            }}
       options={{
          maintainAspectRatio:false,
          animation: {
            duration:1000
          },
          legend: {
            labels: {
                fontColor: "white",
                fontSize: fontSize
            }
          },
          scales: {
            yAxes: [{
              stacked:true,
              gridLines:{
                display:false,
                color: 'rgb(255,255,255)'
              },
              ticks: {
                fontSize: yfontSize,
                fontColor: 'rgb(255,255,255)',
                beginAtZero: true,
                max: 8,
                min: 0,
                callback: function(value, index, values) {
                  return yLabels[value];
                }
              }
            }],
            xAxes: [{
              stacked:true,
              gridLines:{
                display:false,
                offsetGridLines: false,
                color: 'rgb(255,255,255)'
              },
              ticks: {
                fontColor: 'rgb(255,255,255)',
                fontSize: xfontSize,
              },
              barPercentage: 1.15
            }],
          }
       }} />
      </div>
    );
  }
}

export default DesignChart;