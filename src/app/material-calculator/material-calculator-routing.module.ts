import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorMainComponent } from './calculator-main.component';


export const MaterialCalculatorRoutes: Routes = [
  {path: 'material-calculator', pathMatch: "full" , title: "calculator", component: CalculatorMainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(MaterialCalculatorRoutes)],
  exports: []
})
export class MaterialCalculatorRoutingModule { }
