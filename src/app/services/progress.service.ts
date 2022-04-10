import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  private _isLoading = false;

  constructor() { }

  public get loading() { return this._isLoading; }
  public set loading(value: boolean) { this._isLoading = value; }
}
