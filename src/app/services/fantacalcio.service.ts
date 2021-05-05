import { Injectable } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

@Injectable({
   providedIn: 'root'
})
@Injectable()
export class FantacalcioService {

  private internalMessage = 'Ciao dal Service';

  get message(): string { return this.internalMessage; }

  constructor() { }
}
