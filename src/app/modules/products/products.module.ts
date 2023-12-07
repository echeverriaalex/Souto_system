import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProductsComponent } from './list-products/list-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListProductsComponent,
    EditProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule implements OnInit{
  ngOnInit(): void {
    
  }
  
}
