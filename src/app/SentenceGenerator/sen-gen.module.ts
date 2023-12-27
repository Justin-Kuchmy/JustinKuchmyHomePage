import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateHomeComponent } from './generate-home/generate-home.component';



@NgModule({
  declarations:[
      GenerateHomeComponent
    ],
    
  imports: [
    CommonModule
  ],
  exports:[
      GenerateHomeComponent
    ]
})
export class SenGenModule { }
