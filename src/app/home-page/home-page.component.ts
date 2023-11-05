import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <div class="grid grid-cols-2 m-5 w-full">
      <div class="flex bg-red-100 border border-1 border-black mb-1 justify-center items-center h-[300px] w-[300px] mx-auto">
        <button (click)="goToLink('/bikeshop')">Go to Bike Page</button>
      </div>
    
      <div class="flex bg-blue-100 border border-1 border-black mt-1 justify-center items-center h-[300px] w-[300px] mx-auto">
        <button (click)="goToLink('/metube')">Go to Tube Page</button>
      </div>
    </div>
    `,
  styles: []
})
export class HomePageComponent {
  goToLink(url: string){
    window.open(url, "_blank");
}
}
