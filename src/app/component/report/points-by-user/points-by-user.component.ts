import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ChartType,ChartDataset } from 'chart.js';
import { RecordService } from 'src/app/service/record.service';

@Component({
  selector: 'app-points-by-user',
  templateUrl: './points-by-user.component.html',
  styleUrls: ['./points-by-user.component.css']
})
export class PointsByUserComponent {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'pie';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];
  constructor(private rS: RecordService) { }


  ngOnInit(): void {
    this.rS.getPoints().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.name);
      this.barChartData = [
        {
          data: data.map(item => item.points), label: 'Total Puntos por persona',
          backgroundColor:'rgba(30,0,0,0.79)'
        }
      ]

    });
  }
}
