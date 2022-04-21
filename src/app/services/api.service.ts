import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProgressService } from './progress.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  root = environment.apiRoot;

  private _lastestString = new BehaviorSubject<string>("");

  public LastestString$ = this._lastestString.asObservable();

  constructor(
    private client: HttpClient
    ) { }

  RequestA(): Observable<string> {
    return this.client.get<ObjectA>(this.root+"/RequestA")
      .pipe(
        map(res => res.a),
        tap(a => this._lastestString.next(a)),
      );
  }

  RequestB(): Observable<ObjectB>{
    return this.client.get<ObjectB>(this.root+"/RequestB")
    .pipe(tap(res => this._lastestString.next(res.b)));
  }

  RequestC(): Observable<ObjectC>{
    return this.client.get<ObjectC>(this.root+"/RequestC")
      .pipe(tap(res => this._lastestString.next(res.c)));
  }

}

export interface ObjectA {a:string};
export interface ObjectB {b:string};
export interface ObjectC {c:string};

export class Tasks {
  FindFirsteleemntAndAddToCach(): ObjectA {

    return {a:"ADSD"}
  }
}
