import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './add-product/add-product.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
//import { ListProductsComponent } from './list-products/list-products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { ListProducts2Component } from './list-products/list-products.component';

const routes: Routes = [
  {
    path: "",
    component: ListProducts2Component
  },
  {
    path: "admin",
    component: AdminProductsComponent
  },
  {
    path: "add",
    component: AddProductComponent
  },
  {
    path: "list",
    //loadChildren: ()=> import("./list-products/list-products.component").then(m => m.ListProductsComponent)
    component: ListProducts2Component
  },
  {
    path: "edit",
    component: EditProductComponent
  },
  {
    path: "**",
    component: ErrorNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
