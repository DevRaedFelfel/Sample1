import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ApiService } from './services/api.service';
import { ProgressService } from './services/progress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sample1';

  constructor(
    private primengConfig: PrimeNGConfig,
    private progressService: ProgressService,
    private api: ApiService) {}

    public get loading() { return this.progressService.loading; }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }

    RequestA() {
      this.progressService.PushRequest();
      this.api.RequestA().subscribe(response => {
        console.log(response);
        this.progressService.PopRequest();
      })
    }

    RequestB() {
      this.progressService.PushRequest();
      this.api.RequestB().subscribe(response => {
        console.log(response);
        this.progressService.PopRequest();
      })
    }

    RequestC() {
      this.progressService.PushRequest();
      this.api.RequestC().subscribe(response => {
        console.log(response);
        this.progressService.PopRequest();
      })
    }
}
