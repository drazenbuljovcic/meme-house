import { Injectable }         from '@angular/core';

import { Router }             from '@angular/router';
import { Http,
         Response,
         Request,
         Headers,
         RequestMethod,
         RequestOptions }     from '@angular/http';

import { Observable }         from 'rxjs/Rx';

import { Post }               from '../models/post.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService {
  headers: Headers;
  options: RequestOptions;

  constructor(
    private http: Http,
    private router: Router
  ){
    this.headers = new Headers({ 'Content-Type': 'application/json '});
    this.options = new RequestOptions({ headers: this.headers });
  }
  
  getAllPosts() {
    return this.http.get('/api/posts')
                    .map((res: Response) => res.json())
  }

  redirectToSearch(term) {
    this.router.navigate([`search/${term}`]);
  }

  search(term) {
    return this.http.get(`/api/search/${term}`)
                    .map(res => res.json());
  }
}
