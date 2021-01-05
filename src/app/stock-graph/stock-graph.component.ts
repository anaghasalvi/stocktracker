import { Component, OnInit ,Input,ViewChild ,ElementRef} from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
@Component({
  selector: 'app-stock-graph',
  templateUrl: './stock-graph.component.html',
  styleUrls: ['./stock-graph.component.scss']
})
export class StockGraphComponent implements OnInit {
 @Input() graphId:number;
  constructor() { }
  
  ngOnInit() {
   
//     Highcharts.chart('container', {
//       chart: {
//           borderColor: '#EBBA95',
//           borderWidth: 3,
//           type: 'line'
//       },
//       series: [{
//         data: [29.9, 71.5, 106.4, 129.2]
//        }],
//       xAxis: {
        
//           categories: ['15','30','45','60']
//       },
//       yAxis: {
//       },
//       legend: {
//           layout: 'vertical',
//           backgroundColor: '#FFFFFF',
//           floating: true,
//           align: 'left',
//           x: 100,
//           verticalAlign: 'top',
//           y: 70
//       },
//       tooltip: {
//           formatter: function () {
//               return '<b>' + this.series.name + '</b><br/>' +
//                   this.x + ': ' + this.y;
//           }
//       },
//       plotOptions: {
//       }
   
//   });
 


}

}