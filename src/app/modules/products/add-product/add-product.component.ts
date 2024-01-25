import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/core/services/dialog/dialog.service';
//import { Product } from 'src/app/core/models/product';
//import { MAT_DIA } from @angular/material/MatDialog;
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit{
  
  //private product?:Product

  AddProduct: FormGroup = this.formBuilder.group({
    brand: ["", Validators.required],
    description: ["", Validators.required],
    code: ["", Validators.required],
    image: ["", Validators.required],
    price: ["", Validators.required],
  })
  
  constructor(private formBuilder: FormBuilder, private productsService: ProductsService, private router: Router, private dialogService: DialogService) {}
  
  ngOnInit(): void { }

  createProduct(){    
    let brand = this.AddProduct.get('brand')?.value;
    brand = brand.charAt(0).toUpperCase() + brand.substr(1).toLowerCase();

    let description = this.AddProduct.get('description')?.value;
    description = description.charAt(0).toUpperCase() + description.substr(1).toLowerCase();

    return {
      brand : brand,
      description: description,
      code : this.AddProduct.get('code')?.value,      
      price: this.AddProduct.get('price')?.value,
      image: this.AddProduct.get('image')?.value
    }
  }

  openDialog(){
    this.dialogService.openDialogCustom({
      title: "Register product",
      content: "Product successfully registered"
    });
  }

  SaveProduct(){

    let product = this.createProduct();
    console.log(product);

    this.productsService.addNewProduct(product)
    .subscribe(data=>{
      this.openDialog();
      this.router.navigate(['/products/list']);
    })
  }

}