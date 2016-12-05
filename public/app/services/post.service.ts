import { Injectable }         from '@angular/core';
import { Http,
         Response,
         Request,
         Headers,
         RequestMethod,
         RequestOptions }     from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class PostService {
  constructor(
    private http: Http
  ){

  }
  getAllPosts() {
    this.http.get('/api/posts')
             .map(res => res.json())
             .subscribe((data) => {
               console.log(data);
             })
  }
}
