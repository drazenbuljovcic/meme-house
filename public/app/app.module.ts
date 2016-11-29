import { NgModule }                  from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';

import { AppComponent }              from './components/app/app.component';
import { LoginComponent }             from './components/login/login.component';

import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule,
                  routing, ],
  declarations: [ AppComponent,
                  LoginComponent ],
  providers:    [ ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
