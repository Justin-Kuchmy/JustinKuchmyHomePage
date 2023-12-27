import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { metubeModule } from './Metube/me-tube.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatComponentsModule } from './BikeShop/views/mat-components/mat-components.module';
import { BikeShopModule } from './BikeShop/bikeshop.module';
import { HomePageComponent } from './home-page/home-page.component';
import { MaterialCalculatorModule } from './material-calculator/material-calculator.module';
import { FoodFinderModule } from './FoodPriceFinder/food-finder.module';
import { HomePageItemComponent } from './home-page/home-page-item/home-page-item.component';
import { GenerateHomeComponent } from './SentenceGenerator/generate-home/generate-home.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomePageItemComponent,
    GenerateHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    metubeModule,
    BikeShopModule,
    NoopAnimationsModule,
    MatComponentsModule,
    MaterialCalculatorModule,
    FoodFinderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
