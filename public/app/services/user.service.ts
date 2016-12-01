import { Injectable }   from '@angular/core';
import { Http,
         Response,
         Request,
         RequestMethod } from '@angular/http';

@Injectable()
export class UserService {
  constructor(
    private http: Http
  ) {
    
  }

  Login(data) {
    this.http.post('/login', data);
  }
}
