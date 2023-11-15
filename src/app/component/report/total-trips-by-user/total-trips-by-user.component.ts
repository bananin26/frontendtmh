import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ChartType,ChartDataset } from 'chart.js';
import { TripsService } from 'src/app/service/trips.service';

@Component({
  selector: 'app-total-trips-by-user',
  templateUrl: './total-trips-by-user.component.html',
  styleUrls: ['./total-trips-by-user.component.css']
})
export class TotalTripsByUserComponent {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'pie';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];
  constructor(private tS: TripsService) { }


  ngOnInit(): void {
    this.tS.getTrips().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.name);
      this.barChartData = [
        {
          data: data.map(item => item.totalPurchases), label: 'Total Dificultad asignada',
          backgroundColor:'rgba(30,0,0,0.79)'
        }
      ]

    });
  }
}
