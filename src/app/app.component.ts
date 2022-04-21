import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ApiService } from './services/api.service';
import { ProgressService } from './services/progress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Sample1';
  x: Subscription | undefined;

  get LatestString$() { return this.api.LastestString$; }

  constructor(
    private primengConfig: PrimeNGConfig,
    private progressService: ProgressService,
    private api: ApiService) {}

  ngOnDestroy(): void {

  }



    public get loading() { return this.progressService.loading; }

    ngOnInit() {
        this.primengConfig.ripple = true;
        let x = this.api.RequestA();
    }

    RequestA() {

      let x = this.api.RequestA().subscribe(response => {
        console.log(response);
      })
    }

    RequestB() {

      this.api.RequestB().subscribe(response => {
        console.log(response);
      })
    }

    RequestC() {

      this.api.RequestC().subscribe(response => {
        console.log(response);
      })
    }


}
