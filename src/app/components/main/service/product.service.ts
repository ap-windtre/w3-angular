import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductItem } from '../model/product';


@Injectable({
   providedIn: 'root'
})
export class ProductService {

  // SUBSCRIPTION: Dichiariamo il nostro Observale
  private productEvent = new Subject<number>();

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
    return this.http.post<ProductItem[]>(environment.api + '/v0/hero/products', product);
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.delete<ProductItem[]>(environment.api + '/v0/hero/products/' + id);
  }



  // SUBCRIPTION
  // emitta con il next il valore aggiornato.
  emitProductdEvent(id: number): void {
    this.productEvent.next(id);
  }

  // da richimare col .subscribe per mettersi in ascolto....
  productObservable(): Observable<number>{
    return this.productEvent.asObservable();
  }

}
