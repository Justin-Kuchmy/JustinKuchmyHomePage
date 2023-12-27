import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-page-item',
  template: `
            <h1 class="font-bold">{{this.ItemTitle}}</h1>
            <br>
            <ul class="list-disc pl-2">
              <li>
              &emsp; &emsp; {{this.PageDescription}}
              </li>
            </ul>
            <br>
            <p>{{this.Technologies}}</p>
            <br>
            <button class="bg-gray-800 text-white border border-1 border-gray-800 rounded-full" (click)="goToLink(this.urlString)">View Page</button>
  `,
  styles: [
  ]
})
export class HomePageItemComponent {
  @Input() ItemTitle: String = "";
  @Input() PageDescription: String = "";
  @Input() Technologies: String = "";
  @Input() urlString: string = "";
  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
