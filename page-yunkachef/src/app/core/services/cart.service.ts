import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  public items$: Observable<CartItem[]> = this.itemsSubject.asObservable();

  private totalAmountSubject = new BehaviorSubject<number>(0);
  public totalAmount$: Observable<number> = this.totalAmountSubject.asObservable();

  private totalItemsSubject = new BehaviorSubject<number>(0);
  public totalItems$: Observable<number> = this.totalItemsSubject.asObservable();

  constructor() {}

  getItems(): CartItem[] {
    return this.itemsSubject.value;
  }

  updateQuantity(product: Product, quantity: number) {
    let currentItems = [...this.getItems()];
    const existingItemIndex = currentItems.findIndex(item => item.product.id === product.id);

    if (existingItemIndex > -1) {
      if (quantity <= 0) {
        currentItems.splice(existingItemIndex, 1);
      } else {
        currentItems[existingItemIndex].quantity = quantity;
      }
    } else {
      if (quantity > 0) {
        currentItems.push({ product, quantity });
      }
    }

    this.itemsSubject.next(currentItems);
    this.calculateTotals();
  }

  getQuantity(productId: string): number {
    const item = this.getItems().find(i => i.product.id === productId);
    return item ? item.quantity : 0;
  }

  private calculateTotals() {
    const items = this.getItems();
    const totalAmount = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    this.totalAmountSubject.next(totalAmount);
    this.totalItemsSubject.next(totalItems);
  }

  generateWhatsAppLink(phoneNumber: string = '+1234567890'): string {
    const items = this.getItems();
    if (items.length === 0) return '';

    let message = 'Hola Yunkachef, quiero pedir:%0A';
    items.forEach(item => {
      message += `- ${item.quantity} x ${item.product.name} ($${(item.product.price * item.quantity).toFixed(2)})%0A`;
    });
    message += `%0ATotal: $${this.totalAmountSubject.value.toFixed(2)}`;

    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
  }
}
