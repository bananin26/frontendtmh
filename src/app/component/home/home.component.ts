import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  backgroundImage = 'url("assets/fondo-home.jpeg")';
  role: string = '';
  usuario: string = '';
  constructor(private loginService: LoginService) {}

  cerrar() {
    sessionStorage.clear();
  } 
  verificar() {
    this.role = this.loginService.showRole();
    return this.loginService.verificar();
  }
  
  validarRol() {
    if (this.role == 'ADMIN' || this.role == 'CUSTOMER' || this.role == 'TRAVELER') {
      return true;
    } else {
      return false;
    }
  }
}
