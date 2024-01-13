import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProducts2Component } from './modules/products/list-products/list-products.component';

const routes: Routes = [
  {
    path: "",
    component: ListProducts2Component
  },
  {
    path: "products",
    loadChildren: ()=> import("./modules/products/products.module").then(m => m.ProductsModule)
  },
  {
    path: "employees",
    loadChildren: ()=> import('./modules/employees/employees.module').then(m=>m.EmployeesModule)
  },
  {
    path: "stores",
    loadChildren: ()=> import('./modules/stores/stores.module').then(m=>m.StoresModule)
  }
  /*,
  {
    //path: "**",
    //loadChildren: ()=> import('./modules/error-not-found/error-not-found.component').then(m=>m.ErrorNotFoundComponent)
  }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
