import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductItem } from '../model/product';


@Injectable({
   providedIn: 'root'
})
export class ProductService {

  private productEvent = new BehaviorSubject<string>('');
  private _products!: Array<ProductItem>;

  constructor(private http: HttpClient) { }

  public get products(): Array<ProductItem> { return this._products; }
  public set products(value: Array<ProductItem>) { this._products = value;}

  retrieveProducts(): Observable<ProductItem[]>{
    return this.http.get<ProductItem[]>(environment.api + '/v0/hero/products');
  }

  addProduct(product: ProductItem): Observable<any>{
    return this.http.post<ProductItem[]>(environment.api + '/v0/hero/products', product);
  }

  deleteProduct(id: string): Observable<any>{
    return this.http.delete<ProductItem[]>(environment.api + '/v0/hero/products/' +id);
  }

  emitProductdEvent(id: string){
    this.productEvent.next(id)
  }

 productListner(){
    return this.productEvent.asObservable();
  } 

}
