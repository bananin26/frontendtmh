import { Component } from '@angular/core';

@Component({
  selector: 'app-mapachevere',
  templateUrl: './mapachevere.component.html',
  styleUrls: ['./mapachevere.component.css']
})
export class MapachevereComponent {

  position = {
    lat:-12.07660,
    lng:-77.09338
  };

  label={
    color:'red',
    text:'.'
  }
}
