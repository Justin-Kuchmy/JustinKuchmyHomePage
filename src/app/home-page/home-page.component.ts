import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
<main class="flex mx-[10px] my-[10px] justify-items-end">
<div class="grid grid-cols-1 gap-6 py-10 px-10 border border-8 border-gray-800 justify-items-center">
        <!-- Angular project card -->
        <div class="bg-white shadow-md rounded-lg p-4 h-[300px] w-[50%] ">
            <app-home-page-item
            [ItemTitle]="'Bike Shop '"
            [PageDescription]="'&emsp; &emsp; \n CRUD based demo using bike product data. \n Users are able to place orders. \n Admins are able to view existing customer and order information.'"
            [Technologies]="'Technologies used: Springboot, MongoDB, RedisDB, Angular, MaterialUI '"
            [urlString]="'bikeshop'"
            ></app-home-page-item>
          </div>
          <!-- Spring Boot project card -->
          <div class="bg-white shadow-md rounded-lg p-4 h-[300px] w-[50%]">
            <app-home-page-item
            [ItemTitle]="'MeTube Home Page'"
            [PageDescription]="' Uses TailwindCSS and Angular to make a webpage in the likeness of the youtube home page.'"
            [Technologies]="'Technologies used: Angular, TailwindCSS'"
            [urlString]="'/metube'"
            ></app-home-page-item>
        </div>

        <!-- Tailwind project card -->
        <div class="bg-white shadow-md rounded-lg p-4 h-[300px] w-[50%]">
          <!-- Add more project cards as needed -->
          <app-home-page-item
          [ItemTitle]="'Satisfactory Raw Material Calclator'"
          [PageDescription]="'Based on Satisfactory Games Hierarchical Item Structure, with 8 tiers of items where each item has a list of required ingredients. Those required ingredients have their own ingredients.Calulates the base requirements for each item via caching, not recursion.'"
          [Technologies]="'Technologies used:  Springboot, Angular, TailwindCSS'"
          [urlString]="'/material-calculator'"
          ></app-home-page-item>
        </div>

        <div class="bg-white shadow-md rounded-lg p-4 h-[300px] w-[50%]">
            <app-home-page-item
            [ItemTitle]="'Food Finder'"
            [PageDescription]="' Some Description Here '"
            [Technologies]="'Technologies used: Angular, TailwindCSS'"
            [urlString]="'FoodFinder'"
            ></app-home-page-item>
        </div>

        <div class="bg-white shadow-md rounded-lg p-4 h-[300px] w-[50%]">
            <app-home-page-item
            [ItemTitle]="'Sentence Generator'"
            [PageDescription]="' Generate Sentences from a list of given words '"
            [Technologies]="'Technologies used: Angular, TailwindCSS, Springboot'"
            [urlString]="'SentenceGenerate'"
            ></app-home-page-item>
        </div>

    </div>
</main>

<footer>
    <!-- Footer content goes here -->
</footer>
    `,
  styles: []
})
export class HomePageComponent {
  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
