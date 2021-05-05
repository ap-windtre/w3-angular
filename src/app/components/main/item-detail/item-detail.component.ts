import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  quantity!: number;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      if (params.id && this.productService.products) {
        this.quantity = this.productService.products.find( p => p.id === params.id)?.quantity;
      }
    });
  }

  goToProduct(): void {
    this.router.navigate(['product']);

  }

}
