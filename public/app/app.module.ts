import { NgModule }                  from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';

import { AppComponent }              from './components/app/app.component';

import { HeaderComponent }           from './components/header/header.component';

import { LoginComponent }            from './components/login/login.component';
import { SignupComponent }           from './components/signup/signup.component';
import { ProfileComponent }          from './components/profile/profile.component';

import { routing }                   from './app.routing';

@NgModule({
  imports:      [ BrowserModule,
                  routing ],
  declarations: [ AppComponent,
                  HeaderComponent,
                  LoginComponent,
                  SignupComponent,
                  ProfileComponent ],
  providers:    [ ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
