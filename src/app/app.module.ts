import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './modules/add-employee/add-employee.component';
import { ListEmployeesComponent } from './modules/list-employees/list-employees.component';
import { AddProductComponent } from './modules/products/add-product/add-product.component';
import { ListProductsComponent } from './modules/products/list-products/list-products.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { AddStoreComponent } from './modules/add-store/add-store.component';
import { ListStoresComponent } from './modules/list-stores/list-stores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsModule } from './modules/products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    NavBarComponent,
    AddStoreComponent,
    ListStoresComponent,
    AddEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
