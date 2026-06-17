import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../core/models/product.model';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService) {}

  get quantity(): number {
    return this.cartService.getQuantity(this.product.id);
  }

  increase() {
    this.cartService.updateQuantity(this.product, this.quantity + 1);
  }

  decrease() {
    if (this.quantity > 0) {
      this.cartService.updateQuantity(this.product, this.quantity - 1);
    }
  }

  orderNow() {
    if (this.quantity === 0) {
      this.increase();
    }
    const link = this.cartService.generateWhatsAppLink();
    window.open(link, '_blank');
  }
}
