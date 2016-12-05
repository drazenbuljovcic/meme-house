import { Injectable }         from '@angular/core';
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
  private posts: Array<Post>;
  constructor(
    private http: Http
  ){

  }
  getAllPosts() {
    return this.http.get('/api/posts')
              .map((res: Response) => res.json())
  }
}
