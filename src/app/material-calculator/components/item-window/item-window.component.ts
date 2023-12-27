import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { itemList } from '../../data';


@Component({
  selector: 'item-window',
  template: `
    <div class="w-[100%] h-[90%] bg-blue-200 border border-1 border-blue-700 overflow-y-auto">
      <div class="max-h-[500px] justify-items-center">
        <div *ngFor="let item of listOfItems; let i = index">
          <material-button [variant]="'default'" [size]="'default'" class="py-1 px-3 rounded-lg w-[100%]" (click)="itemSelected(item)">
            {{convertToTitleCase(listOfItems[i])}}
          </material-button>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ItemWindowComponent  implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.itemToFilterList && changes.itemToFilterList.currentValue !== changes.itemToFilterList.previousValue) {
      // Logic to update the list based on changes in itemToFilterList
      if (this.itemToFilterList) {
        this.listOfItems = this.filterList(this.itemToFilterList); // Assuming filterList is your filtering logic
      } else {
        // If itemToFilterList is null or empty, reset the list
        this.listOfItems = itemList; // Assuming itemList is your original list
      }
    }
  }
@Output() item: EventEmitter<String> = new EventEmitter<String>();
@Input() itemToFilterList: String | null = null;
itemSelected(itemName: String) {
  this.item.emit(itemName);
}
  ngOnInit(): void {
  }
  listOfItems: String[] = itemList;

  filterList(keyword: String): String[] {
    return itemList.filter(item => item.toLowerCase().includes(keyword.toLowerCase()));
  }

  convertToTitleCase(inputString: String) {
    return inputString
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
