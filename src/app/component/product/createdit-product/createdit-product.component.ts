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
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-createdit-product',
  templateUrl: './createdit-product.component.html',
  styleUrls: ['./createdit-product.component.css']
})
export class CreateditProductComponent {
  form: FormGroup = new FormGroup({});
  product: Product = new Product();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
 
  constructor(
    private pS: ProductService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idProduct: [''],
      nameProduct: ['', Validators.required],
      descriptionProduct: ['', [Validators.required]],
      priceProduct: ['', Validators.required],
      dimensionsProduct: ['', Validators.required],
    });
  }

  accept(): void {
    if (this.form.valid) {
      this.product.idProduct = this.form.value.idProduct;
      this.product.nameProduct = this.form.value.nameProduct;
      this.product.descriptionProduct = this.form.value.descriptionProduct;
      this.product.priceProduct = this.form.value.priceProduct;
      this.product.dimensionsProduct = this.form.value.dimensionsProduct;
     
      this.pS.insert(this.product).subscribe((data) => {
        this.pS.list().subscribe((data) => {
          this.pS.setList(data);
        });
      });
      this.router.navigate(['product']);
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
