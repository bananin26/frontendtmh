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
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-createdit-user',
  templateUrl: './createdit-user.component.html',
  styleUrls: ['./createdit-user.component.css']
})

export class CreateditUserComponent {
  form: FormGroup = new FormGroup({});
  user: User = new User();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  dueDateUser = new FormControl(new Date());
 
  constructor(
    private uS: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idUser: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      phone: ['', Validators.required],
      birthday: ['', Validators.required],
      country: ['', Validators.required],    
    });
  }

  accept(): void {
    if (this.form.valid) {
      this.user.idUser = this.form.value.idUser;
      this.user.name = this.form.value.name;
      this.user.email = this.form.value.email;
      this.user.phone = this.form.value.phone;
      this.user.birthday = this.form.value.birthday;
      this.user.country = this.form.value.country;
     
      this.uS.insert(this.user).subscribe((data) => {
        this.uS.list().subscribe((data) => {
          this.uS.setList(data);
        });
      });
      this.router.navigate(['user']);
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
