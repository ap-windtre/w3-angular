import { Injectable } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';


@Injectable()
export class FantacalcioService {

  private _message = "FANTACALCIO (...dal service)";

  get message() {return this._message}

  constructor() { }
}
