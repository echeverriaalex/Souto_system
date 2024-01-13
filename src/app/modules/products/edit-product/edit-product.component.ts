import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {


  formEditProduct: FormGroup = this.formBuilder.group({  
  })

  constructor(private formBuilder: FormBuilder) {}

  saveChange(){

  }

}
