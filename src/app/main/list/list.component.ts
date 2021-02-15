import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductItem } from '../model/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {

  @Input() products!: Array<ProductItem>;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges){
    // Vediamo insieme cosa accade
  }
  
}

