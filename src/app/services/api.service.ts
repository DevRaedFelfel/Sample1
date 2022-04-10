import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiRoot = "http://localhost:3000";

  constructor(private client: HttpClient) { }

  RequestA() {
    return this.client.get<string>(this.apiRoot+"/RequestA");
  }

  RequestB() {
    return this.client.get<string>(this.apiRoot+"/RequestB");
  }

  RequestC() {
    return this.client.get<string>(this.apiRoot+"/RequestC");
  }
}
