import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { Trips } from 'src/app/model/trips';
import { User } from 'src/app/model/user';
import { TripsService } from 'src/app/service/trips.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-createdit-trips',
  templateUrl: './createdit-trips.component.html',
  styleUrls: ['./createdit-trips.component.css']
})
export class CreateditTripsComponent {
  form: FormGroup = new FormGroup({});
  trips: Trips = new Trips();
  mensaje: string = '';
  fechaActual: Date = new Date();
  fechaMaxima: Date = moment(this.fechaActual).add(15, 'days').toDate();
  dueDateOrder = new FormControl(new Date());
  listaUsers:User[]=[]
  idUserSeleccionada1:number=0
  edition: boolean = false;
  id: number = 0;
  paises: { value: string; viewValue: string }[] = [
    { value: 'United States', viewValue: 'United States' },
    { value: 'Perú', viewValue: 'Perú' },
  ];
  paises2: { value: string; viewValue: string }[] = [
    { value: 'United States', viewValue: 'United States' },
    { value: 'Perú', viewValue: 'Perú' },
  ];
  backgroundImage = 'url("assets/trips.jpg")';
 
  constructor(
    private tS: TripsService,
    private uS: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idTrips: [''],
      shippingDate: ['', [Validators.required]],
      arriveDate: ['', [Validators.required]],
      destinationCountry: ['', Validators.required],
      destinationCity: ['', Validators.required],
      destinationAddress: ['', Validators.required],  
      originCountry: ['', Validators.required],  
      originCity: ['', Validators.required],    
      user: ['', [Validators.required]],
    });
    this.uS.list().subscribe((data) => {
      this.listaUsers = data;
    });

  }

  accept(): void {
    if (this.form.valid) {
      this.trips.idTrips = this.form.value.idTrips;
      this.trips.shippingDate = this.form.value.shippingDate;
      this.trips.arriveDate = this.form.value.arriveDate;
      this.trips.destinationCountry = this.form.value.destinationCountry;
      this.trips.destinationCity = this.form.value.destinationCity;
      this.trips.destinationAddress = this.form.value.destinationAddress;
      this.trips.originCountry = this.form.value.originCountry;
      this.trips.originCity = this.form.value.originCity;
      this.trips.user.idUser = this.form.value.user;
     
      this.tS.insert(this.trips).subscribe((data) => {
        this.tS.list().subscribe((data) => {
          this.tS.setList(data);
        });
      });
      this.router.navigate(['/components/Trips']);
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
  }

  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }

  init() {
    if (this.edition) {
      this.tS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idTrips: new FormControl(data.idTrips),
          shippingDate: new FormControl(data.shippingDate),
          arriveDate: new FormControl(data.arriveDate),
          destinationCountry: new FormControl(data.destinationCountry),
          destinationCity: new FormControl(data.destinationCity),
          destinationAddress: new FormControl(data.destinationAddress),
          originCountry: new FormControl(data.originCountry),
          originCity: new FormControl(data.originCity),
          user: new FormControl(data.user),   
        });
      });
    }
  }  


}
