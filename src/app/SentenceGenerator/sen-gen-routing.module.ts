import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateHomeComponent } from './generate-home/generate-home.component';
import { RouterModule, Routes } from '@angular/router';

export const GeneratorRoutes: Routes = [
  {path: 'SentenceGenerate', pathMatch: "full" , title: "SentenceGenerator", component: GenerateHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(GeneratorRoutes)],
  exports: []
})
export class SenGenRoutingModule { }
