import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'map-marker',
  template: `
<router-outlet></router-outlet>
<h3>Google Markers</h3>
<google-map height="700px"
            width="1850px"
            [center]="center"
            [zoom]="zoom"
            (mapClick)="addMarker($event)">
    <map-marker *ngFor="let markerPosition of markerPositions"
    [position]="markerPosition"
    [options]="markerOptions"></map-marker>
</google-map>

  `,
  styles: [
  ]
})
export class MapMarkerComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  center: google.maps.LatLngLiteral = { lat: 42.98, lng: -81.24 };
  zoom = 12;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [{"lat": 42.97648929981044,"lng": -81.32289290428162}, {"lat": 43.00286180325167,"lng": -81.22726621339902}];

  addMarker(event: google.maps.MapMouseEvent) {
      if (event.latLng != null)
      {
        this.markerPositions.push(event.latLng.toJSON());
        console.log(event.latLng.toJSON());
      }
    }
}
