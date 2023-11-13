import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {
  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {}
  cerrar() {
    sessionStorage.clear();
  } 
}
