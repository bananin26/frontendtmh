import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { TripsService } from 'src/app/service/trips.service';

@Component({
  selector: 'app-total-purchases-by-user-dto',
  templateUrl: './total-purchases-by-user-dto.component.html',
  styleUrls: ['./total-purchases-by-user-dto.component.css']
})
export class TotalPurchasesByUserDTOComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'pie';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];
  constructor(private tS: TripsService) { }


  ngOnInit(): void {
    this.tS.getPurchases().subscribe((data) => {
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
