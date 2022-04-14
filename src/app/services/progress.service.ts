import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  private _loadingStackLength: number = 0;

  constructor() { }

  public get loading() { return this._loadingStackLength > 0; }

  public PushRequest() {
    this._loadingStackLength++;
    console.log("push", this._loadingStackLength);
  }
  public PopRequest() {
    this._loadingStackLength--;
    console.log("pop", this._loadingStackLength);
  }
}
