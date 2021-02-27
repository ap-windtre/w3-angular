import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnChanges {

  value!: string;

  @Input() players! : string[]
  @Output() playerEmitter = new EventEmitter();
  @Output() addEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.players.length);
    console.log(changes);
  }

  remove(p: string){
    this.playerEmitter.emit(p);
  }

  add(){
    console.log(...arguments);
    this.addEmitter.emit(this.value);
  }

}