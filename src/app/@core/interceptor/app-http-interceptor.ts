import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { map, catchError, finalize,  } from 'rxjs/operators';


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor() { }
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => { return event; }),
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          //handle error
        }
        return throwError(error);
      }),

      finalize( () => {
        //todo
      }));
    }
}
