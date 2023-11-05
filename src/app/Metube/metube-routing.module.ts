import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeTubeComponent } from './me-tube.component';


export const MetubeRoutes: Routes = [
    {path: 'metube', pathMatch: "full" , title: "tube", component: MeTubeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(MetubeRoutes)],
  exports: []
})
export class MetubeRoutingModule { }
