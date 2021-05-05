import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductFilterPipe } from '../../pipes/product-filter.pipe';
import { ProductItem } from './model/product';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  products!: Array<ProductItem>;
  filteredItems!: Array<ProductItem>;
  subscription!: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.subscription = this.productService.productObservable().subscribe((value) => {
      if (value) {
        this.productService.deleteProduct(value).subscribe(() => {
          this.getProducts();
        });
      }
    });
  }

  filterProducts(products: ProductItem[], searchText: string): ProductItem[] {
    if (!products) {
      return [];
    }
    if (!searchText) {
      return products;
    }
    searchText = searchText.toLocaleLowerCase();

    return products.filter(p => {
      return p.name.toLocaleLowerCase().includes(searchText);
    });
  }

  onFiltered(searchText: any): void {
    this.products = this.filterProducts(this.productService.products, searchText);
  }

  private getProducts(): void {
    this.productService
      .retrieveProducts()
      .subscribe(data => {
      console.log('la mia response: ', data);
      this.products = data;
      this.productService.products = data;
    },
    error => {
      console.log(error);
    });
  }

  ngOnDestroy(): void {
    console.log('onDestroy');
    this.subscription.unsubscribe();
  }
}
