import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, Observable, of } from 'rxjs';

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

  private productsSubject = new BehaviorSubject<Product[]>(this.products);

  products$ = this.productsSubject.asObservable();

  searchTerm(term: string) {
    const filteredProducts = term === ''
      ? this.products
      : this.products.filter(product => 
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    this.productsSubject.next(filteredProducts);
  }
}
