import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent } from './Components/product-info/product-info.component';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { AppRoutingModule } from '../app-routing.module';
import { GooglemapComponent } from './Components/googlemap/googlemap.component';
import { MapMarkerComponent } from './Components/map-marker/map-marker.component';
import { FoodFinderHomeComponent } from './Components/home/FoodFinderHome.component';



@NgModule({
  declarations: [
    ProductInfoComponent,
    GooglemapComponent,
    MapMarkerComponent,
    FoodFinderHomeComponent,
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    AppRoutingModule,
    FormsModule 
  ]
})
export class FoodFinderModule { }
