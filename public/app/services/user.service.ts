import { Injectable }   from '@angular/core';

import { Http,
         Response,
         Request,
         Headers,
         RequestMethod,
         RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/Rx';

@Injectable()
export class UserService {
  headers: Headers;
  options: RequestOptions;
  
  constructor(
    private http: Http,
    private router: Router
  ) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  redirectIfUserIsLoggedIn() {
    if(this.checkIfUserIsLoggedIn()){
      this.router.navigate([`/profile/${window.sessionStorage.getItem('_id')}`]);
    }
  }
  checkIfUserIsLoggedIn() {
    return window.sessionStorage.getItem('_id') ? true : false;
  }

  checkIfkeepUserLoggedInIsSet() {
    return window.localStorage.getItem('_id') ? true : false;
  }
  
  logoutUser() {
    if(window.sessionStorage.getItem('_id')){
      window.sessionStorage.removeItem('_id');
      this.router.navigate([`/login`]);
    }
  }

  Login(data) {
    return this.http.post('api/login', data, this.options)
                    .map(res => res.json())
                    .subscribe((data) => {
                      window.sessionStorage.setItem('_id', data._id);
                      this.router.navigate([`/profile/${window.sessionStorage.getItem('_id')}`]);
                    });
  }

  Signup(data) {
    return this.http.post('api/signup', data, this.options)
                    .map(res => res.json())
                    .subscribe((data) => {
                      window.sessionStorage.setItem('_id', data._id);
                      this.router.navigate([`/profile/${window.sessionStorage.getItem('_id')}`]);
                    });
  }
}
