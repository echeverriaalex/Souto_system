import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{


  addEmployee: FormGroup = this.formBuilder.group({
    name: [""],
    lastname: [""],
    birthday: [""],
    email: [""],
    password: [""],
    repeatpassword: [""],
  })

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    
  }

  saveEmployee(){
    console.log(this.addEmployee.value)

  }

}