import { Injectable }   from '@angular/core';

import { Http,
         Response,
         Request,
         Headers,
         RequestMethod,
         RequestOptions } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class UserService {
  headers: Headers;
  options: RequestOptions;
  
  constructor(
    private http: Http
  ) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  Login(data) {
    return this.http.post('api/login', data, this.options);
  }

  Signup(data) {
    return this.http.post('api/signup', data, this.options);
  }
}
