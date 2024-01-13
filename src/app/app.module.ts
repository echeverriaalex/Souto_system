import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './modules/employees/add-employee/add-employee.component';
import { ListEmployeesComponent } from './modules/employees/list-employees/list-employees.component';
//import { ListProductsComponent } from './modules/products/list-products/list-products.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { AddStoreComponent } from './modules/stores/add-store/add-store.component';
import { ListStoresComponent } from './modules/stores/list-stores/list-stores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { ErrorNotFoundComponent } from './modules/error-not-found/error-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    //ErrorNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
