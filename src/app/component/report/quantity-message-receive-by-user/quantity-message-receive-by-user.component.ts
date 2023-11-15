import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ChartType,ChartDataset } from 'chart.js';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-quantity-message-receive-by-user',
  templateUrl: './quantity-message-receive-by-user.component.html',
  styleUrls: ['./quantity-message-receive-by-user.component.css']
})
export class QuantityMessageReceiveByUserComponent {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'pie';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];
  constructor(private uS: UserService) { }


  ngOnInit(): void {
    this.uS.getReceive().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.name);
      this.barChartData = [
        {
          data: data.map(item => item.quantityMessage), label: 'Total de mensajes recibidos',
          backgroundColor:'rgba(30,0,0,0.79)'
        }
      ]

    });
  }
}
