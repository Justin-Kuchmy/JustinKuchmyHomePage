import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-bar-filter',
  template: `
    <div class="w-[100%] h-[10%] bg-red-200 border border-1 border-red-700 relative flex items-center">
    <input [(ngModel)]="searchQuery" type="search" placeholder="Search" (keyup.enter)="searchClicked()" class="rounded-full shadow-inner shadow-secondary py-1 px-4 text-lg w-full h-full focus:border-blue-500 outline-none">
</div>
  `,
  styles: [
  ]
})
export class SearchBarFilterComponent {
  @Output() itemtoSearch: EventEmitter<String> = new EventEmitter<String>();
  searchQuery: String = "";

  searchClicked() {
    this.itemtoSearch.emit(this.searchQuery);
   }

}
