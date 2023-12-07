import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AddProductComponent } from './modules/products/add-product/add-product.component';

const routes: Routes = [
  {
    path: "product",
    loadChildren: ()=> import("./modules/products/add-product/add-product.component").then(m=> m.AddProductComponent)
  },
  {
    path: "employee",
    loadChildren: ()=> import('./modules/add-employee/add-employee.component').then(m=>m.AddEmployeeComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
