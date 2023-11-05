import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatComponentsModule } from './views/mat-components/mat-components.module';

import { HomeComponent } from './views/home/home.component';
import { CustomersModule } from './views/customers/customers.module';
import { OrdersModule } from './views/orders/orders.module';
import { ProductsModule } from './views/products/products.module';
import { DeleteDialogComponent } from './views/delete-dialog/delete-dialog.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { AuthNavbarComponent } from './navbars/auth-navbar/auth-navbar.component';
import { IndexNavbarComponent } from './navbars/index-navbar/index-navbar.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { IndexComponent } from './layouts/index/index.component';
import { BikeShopService } from './bikeshop.service';
import { CustomModalModule } from './custom-modal/custom-modal.module';
import { BikeShopComponent } from './bikeshop.component';
import { AppRoutingModule } from '../app-routing.module'


@NgModule({
  declarations: [
    BikeShopComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AuthNavbarComponent,
    IndexNavbarComponent,
    AuthComponent,
    IndexComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NoopAnimationsModule,
    MatComponentsModule,
    CustomersModule,
    OrdersModule,
    ProductsModule,
    FormsModule,
    ReactiveFormsModule,
    CustomModalModule,
    AppRoutingModule
  ],
  exports:[
    BikeShopComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AuthNavbarComponent,
    IndexNavbarComponent,
    AuthComponent,
    IndexComponent,
    HttpClientModule,
    BrowserModule,
    NoopAnimationsModule,
    MatComponentsModule,
    CustomersModule,
    OrdersModule,
    ProductsModule,
    FormsModule,
    ReactiveFormsModule,
    CustomModalModule
  ],
  providers: [BikeShopService],
  bootstrap: [BikeShopComponent]
})
export class BikeShopModule { }
