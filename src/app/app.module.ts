import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';

import { AppComponent } from './app.component';
import { ProgressInterceptor } from './interceptors/progress.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    ButtonModule,
    ProgressBarModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ProgressInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
