import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCart {
  private products: Product[] = [
    {
      name: 'Car',
      price: 2000,
    },
    {
      name: 'Laptop',
      price: 1200,
    },
    {
      name: 'Phone',
      price: 800,
    },
    {
      name: 'Fridge',
      price: 600,
    },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
