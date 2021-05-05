import { Component, Input, OnInit } from '@angular/core';
import { ProductItem } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() product!: ProductItem;

  constructor(private service: ProductService) { }

  ngOnInit(): void { }

  onDelete(id: number): void {
    this.service.emitProductdEvent(id);
  }

}
