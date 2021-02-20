import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductFilterPipe } from '../pipe/product-filter.pipe';
import { ProductItem } from './model/product';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  products!: Array<ProductItem>;
  filteredItems! : Array<ProductItem>;
  subscription!: Subscription;

  constructor(private productService: ProductService, private pipe: ProductFilterPipe) { }

  ngOnInit(): void {
    this.getProducts();
    this.subscription = this.productService.productListner().subscribe((value) => {
      if(value){
        this.productService.deleteProduct(value).subscribe(() => {
          this.getProducts();
        })
      }
    });
  }

  onFiltered(searchText : any){
    this.products = this.pipe.transform(Object.assign([], this.productService.products),searchText)
  }

  private getProducts(){
    this.productService.retrieveProducts().subscribe(data => {
      this.products = data;
      this.productService.products = data;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
