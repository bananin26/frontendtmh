import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list-prices-greater-than1000',
  templateUrl: './list-prices-greater-than1000.component.html',
  styleUrls: ['./list-prices-greater-than1000.component.css']
})
export class ListPricesGreaterThan1000Component implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'pie';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];
  constructor(private pS: ProductService) { }

  ngOnInit(): void {
    this.pS.getListPrice().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.nameProduct);
      this.barChartData = [
        {
          data: data.map(item => item.priceProduct), label: 'Total Dificultad asignada',
          backgroundColor:'rgba(30,0,0,0.79)'
        }
      ]

    });
  }

}
