import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, catchError, concat, concatMap, of } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private urlProducts = "http://localhost:4000/"

  constructor(private http: HttpClient) { }

  addNewProduct(product: Product):Observable<Product>{
    return this.http.post<any>(this.urlProducts + "product", product);
  }

  getAllProducts():Observable<Product[] | any>{  
    // let result = this.http.get<any>(this.urlProducts + "products");    
    //return this.http.get<any>("https://ghibliapi.dev/films");
    // console.log(result);
    return this.http.get<Product[]>(this.urlProducts + "products")
      .pipe(
        catchError (()=> of([]))
      )
  }

}
