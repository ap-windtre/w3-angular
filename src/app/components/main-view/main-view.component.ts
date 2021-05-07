import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductItem } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit, OnDestroy {

  products!: Array<ProductItem>;
  filteredItems!: Array<ProductItem>;
  subscription!: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    // AVANZATO: Gestione centralizzata degli eventi. Vedere list-item e deleteItem.
    // Per la gestione base vedere onDeleteItem qui in fondo al codice.
    this.subscription = this.productService.productEventObservable()
      .subscribe((eventInfo) => {
        if (eventInfo.id) {
          switch (eventInfo.type) {
            case 'delete':
              this.productService.deleteProduct(eventInfo.id).subscribe(() => {
                this.getProducts();
              });
              break;
            default:
              alert('Evento non gestito');
          }
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

  // BASE: Gestione delete item con Output. Vedere la catena che parte da list-item, va a list, e arriva qui
  onDeleteItem(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.getProducts();
    });
  }
}
