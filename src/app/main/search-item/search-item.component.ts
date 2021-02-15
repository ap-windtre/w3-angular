import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductItem } from '../model/product';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() products!: Array<ProductItem>;
  @Output() filtered = new EventEmitter();

  filterText: string = "";
  
  constructor() {}

  ngOnInit(): void { }

  onSearch(){
    if(this.products){ this.filtered.emit(this.filterText);}
  }

}
