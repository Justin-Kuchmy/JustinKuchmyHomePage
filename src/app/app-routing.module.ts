import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BikeShopRoutingModule } from './BikeShop/bikeshop-routing.module';
import {MetubeRoutingModule} from './Metube/metube-routing.module'
import {HomePageComponent } from './home-page/home-page.component';

import {BikeShopRoutes} from './BikeShop/bikeshop-routing.module';
import {MetubeRoutes} from './Metube/metube-routing.module'
import { MaterialCalculatorRoutes } from './material-calculator/material-calculator-routing.module';
import { FoodFinderRoutes } from './FoodPriceFinder/food-finder-routing.module';
import { GeneratorRoutes } from './SentenceGenerator/sen-gen-routing.module';

const routes: Routes = [
  {path: '', pathMatch: "full", title: "home", component: HomePageComponent},
  ...BikeShopRoutes,
  ...MetubeRoutes,
  ...MaterialCalculatorRoutes,
  ...FoodFinderRoutes,
  ...GeneratorRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
