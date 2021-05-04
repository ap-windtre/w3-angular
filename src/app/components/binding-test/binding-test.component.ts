import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-test',
  templateUrl: './binding-test.component.html',
  styleUrls: ['./binding-test.component.scss']
})
export class BindingTestComponent implements OnInit {

  productId = 'AT643314514';

  nome: string = '';
  cognome: string = '';

  property1 = 'Test property';
  property2 = 999;

  today = new Date()

  siteUrl = 'http://www.windtre.it';

  property3 = {
    a: true,
    name: 'Angular'
  };

  property4 = ['a', 2, 3, true, 'five'];
  isButtonEnabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  checkButtonEnabled(): boolean {
    // Fai qualche calcolo...
    return !!((new Date()).getMinutes() % 2);
  }

  buy(id: any, event: any): void {
    console.log(...arguments);
    alert('Sto acquistando il prodotto con id ' + id);
  }

  onKeyDown(event2: any): void {
    console.log(...arguments);
  }

  salvaUtente(): void {
    if (!(this.nome && this.cognome)) {
      return;
    }
    alert('Sto salvando ' + this.nome + ' ' + this.cognome);

    /*this.userService.saveUser({
      name: this.nome,
      surname: this.cognome
    }).subscribe(resp => {
      console.log(resp);
    })*/
  }

}
