import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  backgroundImage = 'url("assets/fondo-home.jpeg")';



  cerrar() {
    sessionStorage.clear();
  }
}
