import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ChartType,ChartDataset } from 'chart.js';
import { LoginService } from 'src/app/service/login.service';
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
  role: string = '';
  barChartData: ChartDataset[] = [];
  constructor(private tS: TripsService, private loginService: LoginService) { }


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
  verificar() {
    this.role = this.loginService.showRole();
    return this.loginService.verificar();
  }
  cerrar() {
    sessionStorage.clear();
  }
  
  validarRol() {
    if (
      this.role == 'ADMIN' ||
      this.role == 'CUSTOMER' ||
      this.role == 'TRAVELER'
    ) {
      return true;
    } else {
      return false;
    }
  }
}
