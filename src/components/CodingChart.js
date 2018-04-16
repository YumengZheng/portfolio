/* eslint-disable */
import React, { Component } from 'react';
import '../App.css';
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
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 99, 132, 0.2)'
          ]
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
                display:false
              },
              ticks: {
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
                offsetGridLines: false
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