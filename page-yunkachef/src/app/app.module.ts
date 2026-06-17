import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryTabsComponent } from './components/category-tabs/category-tabs.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartBannerComponent } from './components/cart-banner/cart-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryTabsComponent,
    ProductCardComponent,
    CartBannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

