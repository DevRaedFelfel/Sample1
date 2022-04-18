import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProgressService } from './progress.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  root = environment.apiRoot;

  constructor(
    private client: HttpClient
    ) { }

  RequestA() {
    return this.client.get<string>(this.root+"/RequestA");
  }

  RequestB() {
    return this.client.get<string>(this.root+"/RequestB");
  }

  RequestC() {
    return this.client.get<string>(this.root+"/RequestC");
  }

}
