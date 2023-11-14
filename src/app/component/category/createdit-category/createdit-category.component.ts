import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-createdit-category',
  templateUrl: './createdit-category.component.html',
  styleUrls: ['./createdit-category.component.css']
})
export class CreateditCategoryComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  category: Category = new Category();
  mensaje: string = '';
  edition: boolean = false;
  id: number = 0;
 
  constructor(
    private cS: CategoryService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edition = data['id'] != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      idCategory: [''],
      nameCategory: ['', Validators.required],
      detailsCategory: ['', [Validators.required]],
    });
  }

  accept(): void {

    if (this.form.valid) {
      this.category.idCategory = this.form.value.idCategory;
      this.category.nameCategory = this.form.value.nameCategory;
      this.category.detailsCategory = this.form.value.detailsCategory;
     
      this.cS.insert(this.category).subscribe((data) => {
        this.cS.list().subscribe((data) => {
          this.cS.setList(data);
        });
      });
      this.router.navigate(['/components/Categories']);
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
      this.cS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idCategory: new FormControl(data.idCategory),
          nameCategory: new FormControl(data.nameCategory),
          detailsCategory: new FormControl(data.detailsCategory),
        });
      });
    }
  }  
}
