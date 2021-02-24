import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter: number;

  constructor() { }

  ngOnInit(): void {
    this.counter = 0;
  }

  get canDecrease(): boolean {
    return this.counter > 0;
  }

  increase(): void {
    this.counter++;
  }

  decrease(): void {
    this.counter--;
  }

}
