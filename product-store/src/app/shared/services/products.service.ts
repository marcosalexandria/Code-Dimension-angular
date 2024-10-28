import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product.inteface';
import { ProductPayload } from '../interfaces/payload-product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }

  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Product[]>('/api/products');
  }

  postProduct(payload: ProductPayload){
    return this.httpClient.post('/api/products', payload);
  }

}
