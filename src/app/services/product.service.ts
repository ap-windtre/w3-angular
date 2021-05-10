import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductItem } from '../models/product';
import { EventInfo } from '../models/event';


@Injectable({
   providedIn: 'root'
})
export class ProductService {

  // SUBSCRIPTION: Dichiariamo il nostro Observable
  private productEvent = new Subject<EventInfo>();

  // SUBSCRIPTION: Dichiariamo il nostro Observale
  // praticamente uguale al subject precedente ma consente di emittare un valore iniziale.
  // private productEvent = new BehaviorSubject<string>('');


  private _products!: Array<ProductItem>;

  constructor(private http: HttpClient) { }

  public get products(): Array<ProductItem> { return this._products; }
  public set products(value: Array<ProductItem>) { this._products = value; }

  retrieveProducts(): Observable<ProductItem[]>{
    return this.http.get<ProductItem[]>(environment.api + '/v0/hero/products');
  }

  addProduct(product: ProductItem): Observable<any>{
    return this.http.post(environment.api + '/v0/hero/products', product);
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.delete(environment.api + '/v0/hero/products/' + id);
  }


  // SUBCRIPTION
  // emitta con il next il valore aggiornato.
  emitProductEvent(settings): void {
    const { type, id } = settings;
    this.productEvent.next({ type, id });
  }

  // da richiamare col .subscribe per mettersi in ascolto....
  productEventObservable(): Observable<EventInfo>{
    return this.productEvent.asObservable();
  }

}
