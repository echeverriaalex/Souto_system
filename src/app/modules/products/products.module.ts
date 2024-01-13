import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { EditProductComponent } from './edit-product/edit-product.component';
//import { ListProductsComponent } from './list-products/list-products.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AddProductComponent } from './add-product/add-product.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { ListProducts2Component } from './list-products/list-products.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AddProductComponent,
    EditProductComponent,
    //ListProductsComponent,
    AdminProductsComponent,
    ErrorNotFoundComponent,
    ListProducts2Component,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ]
})
export class ProductsModule { }
