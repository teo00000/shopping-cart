import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  imports: [],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css',
})
export class CartSummary {
  @Input({ required: true })
  totalPrice!: number;
}
