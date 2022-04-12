import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { AppsComponent } from './apps/apps.component';
import { ProductsComponent } from './products/products.component';
import { VehiclesummaryComponent } from './vehiclesummary/vehiclesummary.component';
import { AccountsComponent } from './accounts/accounts.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreatevehiclesComponent } from './createvehicles/createvehicles.component';
import { CreateaccountsComponent } from './createaccounts/createaccounts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    InterpolationComponent,
    EventbindingComponent,
    AppsComponent,
    ProductsComponent,
    VehiclesummaryComponent,
    AccountsComponent,
    HomeComponent,
    CreatevehiclesComponent,
    CreateaccountsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
