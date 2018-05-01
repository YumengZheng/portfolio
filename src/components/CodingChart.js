/* eslint-disable */
import React, { Component } from 'react';
import '../styles/Banner.css';
import {Bar} from 'react-chartjs-2'

class DesignChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData:{
        labels: ["Javascript", "React", "Redux", "Node.js", "mongoDB"],
        datasets:[
          {
            label: 'Coding Skills',
            data: [7, 7, 6, 5, 4, 3],
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
      }
    }
  }
  render() {
    const yLabels = {
      0 : '', 2 : 'NEWBIE', 4 : 'TRYHARD', 6 : 'HACKER', 8 : 'NO-LIFE',
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
      <div className="code-chart">
       <Bar
       data={this.state.chartData} 
       options={{
          maintainAspectRatio:false,
          animation: {
            duration:2000
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
                fontSize: xfontSize,
                fontColor: 'rgb(255,255,255)',
              },
              barPercentage: 1.15
            }]
          }
       }} />
      </div>
    );
  }
}

export default DesignChart;