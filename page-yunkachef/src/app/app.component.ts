import { Component, OnInit } from '@angular/core';
import { Product } from './core/models/product.model';
import { MOCK_PRODUCTS } from './core/mocks/products.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'page-yunkachef';
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];

  ngOnInit() {
    this.allProducts = MOCK_PRODUCTS;
    this.filteredProducts = [...this.allProducts];
  }

  onCategoryChanged(category: string) {
    if (category === 'Todos') {
      this.filteredProducts = [...this.allProducts];
    } else {
      this.filteredProducts = this.allProducts.filter(p => p.category === category);
    }
  }
}
