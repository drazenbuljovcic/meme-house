import { Routes, RouterModule }     from "@angular/router";

import { LoginComponent }           from './components/login/login.component';
import { SignupComponent }          from './components/signup/signup.component';
import { ProfileComponent }         from './components/profile/profile.component';

import { PostsComponent }           from './components/posts/posts.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {	path: 'signup',	component: SignupComponent },
  {	path: 'profile/:id', component: ProfileComponent, pathMatch: 'full' },
  {	path: 'posts', component: PostsComponent },
  {	path: 'search/:term', component: PostsComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
