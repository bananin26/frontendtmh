import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../model/message';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})

export class MessageService {
  private url = `${base_url}/Messages`;
  private listaCambio = new Subject<Message[]>();
  constructor(private http: HttpClient) {}

  list() {
    let token = sessionStorage.getItem('token');
<<<<<<< HEAD
    return this.http.get<Message[]>(this.url,{
      headers: new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json'),
    });
  }

  insert(ms: Message) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, ms,{
      headers: new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json'),
=======
    return this.http.get<Message[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  insert(message: Message) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, message, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
>>>>>>> 0766da850f1cc9b3ca581ff4342beda73f6da593
    });
  }

  setList(listaNueva: Message[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

<<<<<<< HEAD
  listId(id:number){
    let token = sessionStorage.getItem('token');
    return this.http.get<Message>(`${this.url}/${id}`,{
      headers: new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json'),
    });
  }  

  update(m: Message) {
    let token = sessionStorage.getItem('token');
    return this.http.put(this.url, m,{
      headers: new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json'),
    });
  }

  delete(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.delete(`${this.url}/${id}`,{
      headers: new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json'),
=======
  listId(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<Message>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  update(m: Message) {
    let token = sessionStorage.getItem('token');
    return this.http.put(this.url, m, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  delete(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
>>>>>>> 0766da850f1cc9b3ca581ff4342beda73f6da593
    });
  }
}
