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
    public progressService: ProgressService,
    private api: ApiService) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }

    RequestA() {
      this.progressService.loading = true;
      this.api.RequestA().subscribe(response => {
        console.log(response);
        this.progressService.loading = false;
      })
    }

    RequestB() {
      this.progressService.loading = true;
      this.api.RequestB().subscribe(response => {
        console.log(response);
        this.progressService.loading = false;
      })
    }

    RequestC() {
      this.progressService.loading = true;
      this.api.RequestC().subscribe(response => {
        console.log(response);
        this.progressService.loading = false;
      })
    }
}
