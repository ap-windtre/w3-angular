import { Component, OnInit } from '@angular/core';
import { FantacalcioService } from '../../service/fantacalcio.service';

@Component({
  selector: 'app-fantacalcio',
  templateUrl: './fantacalcio.component.html',
  styleUrls: ['./fantacalcio.component.scss']
})
export class FantacalcioComponent implements OnInit {

  message!: string;

  constructor(private service: FantacalcioService) { }
  players = ['Totti', 'Maldini' , 'Maradona'];

  ngOnInit(): void {
    this.message = this.service.message;
  }

  onPlayerRemove(event:any){
    this.players = this.players.filter( f => f != event);
  }

  onAddPlayer(event: any){
    this.players.push(event);
    this.players = this.players.slice();
  }

}
