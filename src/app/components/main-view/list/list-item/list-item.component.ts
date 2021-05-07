import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductItem } from '../../../../models/product';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() product!: ProductItem;
  @Output() deleteItem: EventEmitter<number> = new EventEmitter<number>();

  constructor(private service: ProductService) { }

  ngOnInit(): void { }

  onDelete(id: number): void {
    // Base: con l'evento di output.
    this.deleteItem.emit(id);

    // AVANZATO: Se si vuole usare un subject centralizzato
    // this.service.emitProductEvent({ type: 'delete', id: id });
  }

}
