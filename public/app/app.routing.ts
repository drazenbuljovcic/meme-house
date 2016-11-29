import { Routes, RouterModule }     from "@angular/router";

import { LoginComponent }           from './components/login/login.component';
import { SignupComponent }          from './components/signup/signup.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
  	path: 'signup',
  	component: SignupComponent
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
