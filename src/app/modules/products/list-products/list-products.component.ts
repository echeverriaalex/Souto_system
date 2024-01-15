import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProducts2Component {

  constructor(private productService: ProductsService){}

  productsList:  Array<Product> = [];

  ngOnInit():void{
    //this.getListProducts();
    this.getListProducts();
    
  }

  getListProducts():void{
    this.productService.getAllProducts()
    .subscribe({
      next: (response) =>{
        this.productsList = response as Product[];
        console.log(this.productsList);
      },
      error(error){ console.log(error) },
      complete() { console.log("All products are ready.") }
    })
  }

  getListProductsBasic():void{
    this.productService.getAllProducts()
      //.subscribe(products => this.productsList = products);
      .subscribe(products => console.log(products));
  }

  saludar(id: number | undefined){
    console.log("hola " + id);
    
  }
}