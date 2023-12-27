import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  template: `
<router-outlet></router-outlet>
<h3>Google Maps</h3>
<google-map height="700px"
            width="1850px"
            [center]="center"
            [zoom]="zoom"
            (mapClick)="moveMap($event)"
            (mapMousemove)="move($event)">

</google-map>
<div>Latitude: {{display?.lat}}</div>
<div>Longitude: {{display?.lng}}</div>

  `,
  styles: [
  ]
})
export class GooglemapComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 42.98240990346171,
      lng: -81.24962200847429
  };
  zoom = 12;
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
