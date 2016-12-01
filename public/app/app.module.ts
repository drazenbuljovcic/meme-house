import { NgModule }                  from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';
import { HttpModule }                from '@angular/http';
import { FormsModule, 
          ReactiveFormsModule }      from '@angular/forms';

import { AppComponent }              from './components/app/app.component';

import { HeaderComponent }           from './components/header/header.component';

import { LoginComponent }            from './components/login/login.component';
import { SignupComponent }           from './components/signup/signup.component';
import { ProfileComponent }          from './components/profile/profile.component';

import { UserService }               from './services/user.service';
import { routing }                   from './app.routing';

@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  FormsModule,
                  ReactiveFormsModule,
                  routing ],
  declarations: [ AppComponent,
                  HeaderComponent,
                  LoginComponent,
                  SignupComponent,
                  ProfileComponent ],
  providers:    [ UserService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
