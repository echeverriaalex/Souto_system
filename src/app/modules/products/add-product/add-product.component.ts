import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
//import { Product } from 'src/app/core/models/product';

import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit{
  
  //private product?:Product

  formAddProduct: FormGroup = this.formBuilder.group({
    brand: ["", Validators.required, Validators.minLength(1)],
    description: ["", Validators.required, Validators.minLength(1)],
    code: ["", Validators.required, Validators.minLength(1)],
    image: ["", Validators.required, Validators.minLength(1)],
    price: ["", Validators.required, Validators.minLength(1)],
  })
  
  constructor(private formBuilder: FormBuilder, private productsService: ProductsService, private router: Router) {}
  
  ngOnInit(): void { }

  SaveProduct(){

    let brand = this.formAddProduct.get('brand')?.value;
    brand = brand.charAt(0).toUpperCase() + brand.substr(1).toLowerCase();

    let description = this.formAddProduct.get('description')?.value;
    description = description.charAt(0).toUpperCase() + description.substr(1).toLowerCase();

    const product = {
      brand : brand,
      code : this.formAddProduct.get('code')?.value,
      description: description,
      price: this.formAddProduct.get('price')?.value,
      image: this.formAddProduct.get('image')?.value
    }

    console.log(product);
    

    this.productsService.addNewProduct(product)
    .subscribe(data=>{
      this.router.navigate(['/products/list']);
    })
  }

}