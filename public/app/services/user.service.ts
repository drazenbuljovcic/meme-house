import { Injectable }   from '@angular/core';
import { Http,
         Response,
         Request,
         Headers,
         RequestMethod } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UserService {
  constructor(
    private http: Http
  ) {
  }

  Login(data) {
    console.log(data);
    this.http.post('api/login', 
                   JSON.stringify(data),
                   );
  }
}
