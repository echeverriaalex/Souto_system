import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {


  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {  

    const routeParams = this.route.snapshot.paramMap;
  }


}
