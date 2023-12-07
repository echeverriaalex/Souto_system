import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Product } from 'src/app/core/models';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  
  constructor(private formBuilder: FormBuilder) {}

  public product: Product = new Product();

  formAddProduct: FormGroup = this.formBuilder.group({
    brand: ["", Validators.required, Validators.minLength(1)],
    description: ["", Validators.required, Validators.minLength(1)],
    code: ["", Validators.required, Validators.minLength(1)],
    pice: [0, Validators.required, Validators.minLength(1)],    
  })
  
  ngOnInit(): void { }

  public SaveProduct(){
    this.product.brand = " "
    this.product.code =""
    this.product.description =""
    this.product.id = 0
  }

}