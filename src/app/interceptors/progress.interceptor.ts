import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';
import { ProgressService } from '../services/progress.service';

@Injectable()
export class ProgressInterceptor implements HttpInterceptor {

  constructor(private progressService: ProgressService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("pushing");
    this.progressService.PushRequest();
    // it has 3 reasons
    // 1- to call the next intercept function inside the next interceptor
    // 2- in case not next interceptor. it executes the actual HttpClient verb. such as the get
    // 3- then after complete the execution of this request, execute the call back
    return next.handle(request).pipe (
      finalize(() => this.progressService.PopRequest()),
    );

  }
}

// inside the header add the authorize header with token
// for each request using a new created interceptor.
