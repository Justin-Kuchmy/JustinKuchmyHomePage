import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MaterialCalculatorService } from './material-calculator.service';
import { Observable } from 'rxjs';
import { PayloadData } from './Entities/PayloadData';
import { Item } from './Entities/Item';

@Component({
  selector: 'app-calculator-main',
  template: `
  <div class="flex justify-center items-center">
    <h1 class="text-4xl font-bold text-center">{{ convertToTitleCase(this.payloadObject?.name)}} </h1>
  </div>
    <div class="grid grid-cols-2 h-[800px] gap-4  border border-4 border-red-800 m-5 p-2">
      <div class="gap-2 justify-items-center border border-1 border-black items-center justify-center">
          <search-bar-filter (itemtoSearch)="setItemToSearch($event)"></search-bar-filter>
          <item-window (item)="SearchForItem($event)" [itemToFilterList]="itemString"></item-window>
      </div>
      <div class="gap-2 justify-items-center border border-1 border-black items-center justify-center">
        <ingredient-window [ingredients]="this.payloadObject?.ingredients"></ingredient-window>
          <raw-material-window [rawMaterials]="this.payloadObject?.baseItemRequirements"></raw-material-window>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class CalculatorMainComponent implements OnInit {
  payloadData$?: Observable<PayloadData>;
  payloadObject?: PayloadData;
  AllpayloadObjects?: PayloadData[] = [];
  allItems?: Item[];
  itemString: String = "";
   ngOnInit(): void
   {
       fetch('https://raw.githubusercontent.com/Justin-Kuchmy/data/main/ItemData.json')
       .then(response => {
           if (!response.ok) {
           throw new Error('Network response was not ok');
           }
           return response.json(); // Parse the response as JSON
       })
         .then(data => {
           this.AllpayloadObjects = data;
            })
       .catch(error => {
           console.error('There was a problem fetching the data:', error);
       });
     this.payloadData$?.subscribe((value: PayloadData) =>
     { 
       
     })
      
       
   }
  SearchForItem(item: String) {
    console.log(item);
    this.payloadObject = this.AllpayloadObjects?.find(i => i.name == item);
    console.log(this.payloadObject?.ingredients)
    console.log(this.payloadObject?.baseItemRequirements)

  }
setItemToSearch($event: String) {
  this.itemString = $event;
}


  convertToTitleCase(inputString: String | undefined | null) {
    if (inputString != undefined || inputString != null)
    {
      return inputString
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
       .join(' ');
     }
    
    return "Select An item";
  }
}
