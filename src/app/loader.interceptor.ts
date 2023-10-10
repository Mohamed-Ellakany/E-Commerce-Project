import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private _LoaderService: LoaderService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     this._LoaderService.show();

let newReq = request.clone({
  headers:request.headers.set("token" , `${localStorage.getItem("userToken")}`)
})

     return next.handle(newReq).pipe(
           finalize(() => this._LoaderService.hide()),
     );
  }
}
