import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BikeShopRoutingModule } from './BikeShop/bikeshop-routing.module';
import {MetubeRoutingModule} from './Metube/metube-routing.module'
import {HomePageComponent } from './home-page/home-page.component';

import {BikeShopRoutes} from './BikeShop/bikeshop-routing.module';
import {MetubeRoutes} from './Metube/metube-routing.module'

const routes: Routes = [
  {path: '', pathMatch: "full", title: "home", component: HomePageComponent},
  ...BikeShopRoutes,
  ...MetubeRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
