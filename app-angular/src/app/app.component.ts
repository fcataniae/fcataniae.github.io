import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lat: number = 51.678418;
  lng: number = 7.809007;
  coods: { lat: number, lng: number, label: string }[] = [
    { "lat": 55, "lng": 9, "label": "suc 1" },
    { "lat": 52, "lng": 7, "label": "suc 2" },
    { "lat": 53, "lng": 8, "label": "suc 3" }
];


}
