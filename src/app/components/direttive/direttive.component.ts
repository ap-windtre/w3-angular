import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direttive',
  templateUrl: './direttive.component.html',
  styleUrls: ['./direttive.component.scss']
})
export class DirettiveComponent implements OnInit {

  status: string;
  items: any[] = []

  constructor() { }

  ngOnInit(): void {
    this.status = 'LOADING';
    this.loadData();
  }

  loadData() {
    // Chiama API REST
    setTimeout(() => {
      this.status = 'LOADED';
      this.elaborateData();
    }, 3000)
  }

  elaborateData() {
    // Elabora...
    setTimeout(() => {
      this.status = 'FULL';
      this.items = [{ name: "Achille"}, { name: "Ettore"}, { name: "Renato"}, { name: "Antonio"}];
    }, 2000);
  }

}
