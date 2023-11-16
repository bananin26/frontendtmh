import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  position = {
    lat:-12.07660,
    lng:-77.09338
  };

  label={
    color:'red',
    text:'.'
  }
}
