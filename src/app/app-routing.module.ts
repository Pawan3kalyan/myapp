import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AppsComponent } from './apps/apps.component';
import { CreateaccountsComponent } from './createaccounts/createaccounts.component';
import { CreatevehiclesComponent } from './createvehicles/createvehicles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { VehiclesummaryComponent } from './vehiclesummary/vehiclesummary.component';

const routes: Routes = [
  {path: "login",component:LoginComponent},
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,children:[
  //   {path:"",component:HomeComponent},
   {path:"home",component:HomeComponent},
    {path:"vehiclesummary",component:VehiclesummaryComponent},
    {path:"interpolation",component:InterpolationComponent},
    {path:"eventbinding",component:EventbindingComponent},
     {path:"apps",component:AppsComponent},
  {path:"account",component:AccountsComponent},
  {path:"products",component:ProductsComponent},
  {path:"createvehicles",component:CreatevehiclesComponent},
  {path:"createaccounts",component:CreateaccountsComponent},

   ]},
  // {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
