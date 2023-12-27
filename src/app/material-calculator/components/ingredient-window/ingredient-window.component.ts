import { Component, Input } from '@angular/core';
import { StringDoublePair } from '../../Entities/StringDoublePair';

@Component({
  selector: 'ingredient-window',
  template: `
    <div class="w-[100%] h-[50%] bg-yellow-200  border border-1 border-yellow-700">
    <div class="flex justify-center items-center">
        <h1 class="text-4xl font-bold text-center">Ingreident List for Item</h1>
      </div>
      <div *ngFor="let item of ingredients">
        <p>
        {{convertToTitleCase(item.key)}}: {{item.value}}
        </p>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class IngredientWindowComponent {
  @Input() ingredients?: StringDoublePair[];
  convertToTitleCase(inputString: String | undefined | null) {
    if (inputString != undefined || inputString != null)
    {
      return inputString
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
       .join(' ');
     }
    
    return "";
  }
}
