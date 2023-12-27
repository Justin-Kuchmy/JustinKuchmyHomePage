import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FoodFinderHomeComponent } from './Components/home/FoodFinderHome.component';

export const FoodFinderRoutes: Routes = [
  {path: 'FoodFinder', pathMatch: "full" , title: "Food Finder", component: FoodFinderHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(FoodFinderRoutes)],
  exports: []
})
export class FoodFinderRoutingModule { }
