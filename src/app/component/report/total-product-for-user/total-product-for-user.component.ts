import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ChartType,ChartDataset } from 'chart.js';
import { ProductService } from 'src/app/service/product.service';
import { TripsService } from 'src/app/service/trips.service';

@Component({
  selector: 'app-total-product-for-user',
  templateUrl: './total-product-for-user.component.html',
  styleUrls: ['./total-product-for-user.component.css']
})
export class TotalProductForUserComponent implements OnInit{
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'pie';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];
  constructor(private pS: ProductService) { }
  ngOnInit(): void {
    this.pS.getTrips().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.name);
      this.barChartData = [
        {
          data: data.map(item => item.totalProducts), label: 'Total de viajes',
          backgroundColor:'rgba(0,0,0,0.79)'
        }
      ]

    });
  }
}
