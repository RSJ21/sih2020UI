import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnInit {
  public chart: Chart;

  constructor() { }

  ngOnInit() {
    this.chart = new Chart({
      chart: {
          renderTo: 'container2',
          type: 'bar',
          height: '250'
      },
      title:{
          text:''
      },
      yAxis: {
          title: {
              text: 'Cancellation no',
              useHTML: true
          }
      },
      xAxis: {
        categories: ['7/12/19', '14/12/19', '21/12/2019', '28/12/19', '4/1/2020'],
},
    colors:['#4CAF50','#FFFF00','#4CAF50','#FFFF00','#4CAF50'],
      credits: {
          enabled: false
      },
      legend: {
          enabled: false
      },
      series: [{
        data: [['7/12/19' , 80],['14/12/19', 79],['21/12/2019', 72],['28/12/19',71],['4/1/2020',68]]
    }]
  })
 }
}
