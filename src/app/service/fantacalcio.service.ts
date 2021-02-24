import { Injectable } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class FantacalcioService {

  private _message = "Ciao dal Service";

  get message() {return this._message}

  constructor() { }
}
