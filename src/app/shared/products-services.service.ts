import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../components/models/interface';

@Injectable({
  providedIn: 'root'

})

export class ProductsServicesService {

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get("http://localhost:3000/products")
  }

  postProductos(newProduct: Product){
    return this.http.post<Product>("http://localhost:3000/products", newProduct)

  }
}
