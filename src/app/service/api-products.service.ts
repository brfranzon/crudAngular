import { Products } from './../models/products-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:5555/api/products";

type Exactly<T, U> = { [K in keyof U]: K extends keyof T ? T[K] : never };

interface ApiMethodsInterface {
  fetchAllProducts(): Observable<Products[]>,
  createProduct(newProduct: Products): Observable<Products[]>,
  deleteProductById(id: string): Observable<Products[]>,
  productById(id: string): any;
  updateProduct(id: string, product: Products): Observable<Products[]>,
}

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService implements Exactly<ApiMethodsInterface, ApiProductsService> {

  constructor(private http: HttpClient) { }

  fetchAllProducts(): Observable<Products[]> {
    return this.http.get(API_URL) as any;
  }

  createProduct(newProduct: Products): Observable<Products[]> {
    return this.http.post(API_URL, newProduct) as any;
  }

  deleteProductById(id: string) {
    return this.http.delete(`${API_URL}/${id}`) as any;
  }

  productById(id: string) {
    return this.http.get(`${API_URL}/${id}`) as any;
  }

  updateProduct(id: string, product: Products) {
    return this.http.put(`${API_URL}/${id}`, product) as any;
  }


}
