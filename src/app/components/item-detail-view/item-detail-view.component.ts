import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductItem } from '../../models/product';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail-view.component.html',
  styleUrls: ['./item-detail-view.component.scss']
})
export class ItemDetailViewComponent implements OnInit {

  currentProduct!: ProductItem;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      if (params.id && this.productService.products) {
        this.currentProduct = this.productService.products.find( p => p.id.toString() === params.id);
      }
    });
  }

  goToProduct(): void {
    this.router.navigate(['product']);
  }

}
