import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-tabs',
  templateUrl: './category-tabs.component.html',
  styleUrls: ['./category-tabs.component.css']
})
export class CategoryTabsComponent {
  categories = ['Todos', 'Helados Populares', 'Tortas y Postres', 'Cafés'];
  selectedCategory = 'Todos';

  @Output() categoryChanged = new EventEmitter<string>();

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.categoryChanged.emit(category);
  }
}
