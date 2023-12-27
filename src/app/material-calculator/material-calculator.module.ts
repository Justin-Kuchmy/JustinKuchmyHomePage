import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorMainComponent } from './calculator-main.component';
import { SearchBarFilterComponent } from './components/search-bar-filter/search-bar-filter.component';
import { ItemWindowComponent } from './components/item-window/item-window.component';
import { IngredientWindowComponent } from './components/ingredient-window/ingredient-window.component';
import { RawMaterialWindowComponent } from './components/raw-material-window/raw-material-window.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';


@NgModule({
  declarations: [
    CalculatorMainComponent,
    SearchBarFilterComponent,
    ItemWindowComponent,
    IngredientWindowComponent,
    RawMaterialWindowComponent,
    CustomButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MaterialCalculatorModule { }
