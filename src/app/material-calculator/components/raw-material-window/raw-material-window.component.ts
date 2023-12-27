import { Component, Input } from '@angular/core';
import { StringDoublePair } from '../../Entities/StringDoublePair';

@Component({
  selector: 'raw-material-window',
  template: `
    <div class="w-[100%] h-[50%]  bg-green-200  border border-1 border-green-700">
      <div class="flex justify-center items-center">
        <h1 class="text-4xl font-bold text-center">Raw Materials Needed for One Item</h1>
      </div>
      <div *ngFor="let item of rawMaterials | keyvalue">
          <p>
            {{convertToTitleCase(item.value.key)}}: {{item.value.value}}
          </p>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class RawMaterialWindowComponent {
  @Input() rawMaterials?: Map<String, StringDoublePair>
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
