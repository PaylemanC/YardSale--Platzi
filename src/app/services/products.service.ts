import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  private urlAPI = 'https://api.escuelajs.co/api/v1';

  getAllProducts() {
    return this.http.get<Product[]>(`${this.urlAPI}/products`);
  }

  getProductsByPage(limit: number, offset: number) {
    return this.http.get<Product[]>(`${this.urlAPI}/products`, {
      params: { limit, offset }
    });
  }

  getByCategory(categoryId: string | number, limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset) {
      params = params.append('limit', limit);
      params = params.append('offset', offset);
    }
    return this.http.get<Product[]>(`${this.urlAPI}/categories/${categoryId}/products`, { params })
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.urlAPI}/products/${id}`)
  }
}
