import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { Record } from 'src/app/model/record';
import { Product } from 'src/app/model/product';
import { Category } from 'src/app/model/category';
import { ProductService } from 'src/app/service/product.service';
import { CategoryService } from 'src/app/service/category.service';
import { RecordService } from 'src/app/service/record.service';
import * as moment from 'moment';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-createdit-record',
  templateUrl: './createdit-record.component.html',
  styleUrls: ['./createdit-record.component.css'],
})
export class CreateditRecordComponent implements OnInit {
  
  form: FormGroup = new FormGroup({});
  record: Record = new Record();
  mensaje: string = '';
  dueDateOrder = new FormControl(new Date());
  listaProduct: Product[] = [];
  listaCategory: Category[] = [];
  listaUser: User[] = [];
  idProductSeleccionada: number = 0;
  idCategorySeleccionada: number = 0;
  idUserSeleccionada: number = 0;
  payment: { value: string; viewValue: string }[] = [
    { value: 'Efectivo', viewValue: 'Efectivo' },
    { value: 'Visa', viewValue: 'Visa' },
    { value: 'Mastercard', viewValue: 'Mastercard' },
    { value: 'Paypal', viewValue: 'Paypal' },
  ];
  puntos: { value: number; viewValue: number }[] = [
    { value: 10, viewValue: 10 },
    { value: 30, viewValue: 30 },
    { value: 50, viewValue: 50 },
    { value: 100, viewValue: 100 },
    { value: 120, viewValue: 120 },
    { value: 150, viewValue: 150 },
    { value: 200, viewValue: 200 },
  ];
  fechaActual: Date = new Date();
  fechaMaxima: Date = moment(this.fechaActual).add(7, 'days').toDate();
  fechaMaxima2: Date = moment(this.fechaActual).add(14, 'days').toDate();

  constructor(
    private pS: ProductService,
    private cS: CategoryService,
    private rS: RecordService,
    private uS: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idRecord: [''],
      payment: ['', Validators.required],
      paymentDate: ['', [Validators.required]],
      arriveDate: ['', Validators.required],
      points: ['', Validators.required],
      product: ['', Validators.required],
      user: ['', Validators.required],
    });
    this.pS.list().subscribe((data) => {
      this.listaProduct = data;
    });
    this.cS.list().subscribe((data) => {
      this.listaCategory = data;
    });
    this.uS.list().subscribe((data) => {
      this.listaUser = data;
    });
    
  }
  
  accept(): void {
    if (this.form.valid) {
      this.record.idRecord = this.form.value.idRecord;
      this.record.payment = this.form.value.payment;
      this.record.paymentDate = this.form.value.paymentDate;
      this.record.arriveDate = this.form.value.arriveDate;
      this.record.product.idProduct = this.form.value.product;
      this.record.product.priceProduct = this.form.value.priceProduct;
      this.record.user.idUser = this.form.value.user;
      this.record.points = this.form.value.points;

      this.rS.insert(this.record).subscribe((data) => {
        this.rS.list().subscribe((data) => {
          this.rS.setList(data);
        });
      });
      this.router.navigate(['/components/Records']);
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
}
