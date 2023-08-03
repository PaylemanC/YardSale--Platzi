import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  private urlAPI = 'https://api.escuelajs.co/api/v1/products'

  getAllProducts() {
    return this.http.get<Product[]>(this.urlAPI);
  }

  getProductsByPage(limit: number, offset: number) {
    return this.http.get<Product[]>(this.urlAPI, {
      params: { limit, offset }
    });
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.urlAPI}/${id}`)
  }
}
