/* eslint-disable */
import React, { Component } from 'react';
import '../styles/Banner.css';
import {Bar} from 'react-chartjs-2'

class DesignChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData:{
        labels: ["Javascript", "React", "JQuery", "Node.js", "Express.js", "mongoDB", "Postgres"],
        datasets:[
          {
            label: 'Coding Skill',
            data: [7, 6, 5, 3, 2, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 99, 132, 1)'
            ],
            borderColor: 'rgb(255,255,255)'
          }
        ]
      }
    }
  }
  render() {
    const yLabels = {
      0 : '', 2 : 'NEWBIE', 4 : 'TRYHARD', 6 : 'HACKER', 8 : 'NO-LIFE',
    }
    return (
      <div className="design-chart">
       <Bar
       data={this.state.chartData} 
       options={{
          maintainAspectRatio:false,
          animation: {
            duration:2000
          },
          scales: {
            yAxes: [{
              stacked:true,
              gridLines:{
                display:false,
                color: 'rgb(255,255,255)'
              },
              ticks: {
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