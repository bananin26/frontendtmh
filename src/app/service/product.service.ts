import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product';
import { TotalProductForUserDTO } from '../model/TotalProductForUserDTO';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = `${base_url}/Products`;
  private listaCambio = new Subject<Product[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Product[]>(this.url);
  }
  insert(pr: Product) {
    return this.http.post(this.url, pr);
  }
  setList(listaNueva: Product[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<Product>(`${this.url}/${id}`);
  } 
  update(p: Product) {
    return this.http.put(this.url, p);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getProducts():Observable<TotalProductForUserDTO[]>{
    let token = sessionStorage.getItem('token');
    return this.http.get<TotalProductForUserDTO[]>(`${this.url}/ProductForUser`,{
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),

    });
  }
}
