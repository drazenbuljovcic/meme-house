import { Component, OnInit }  from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

import { PostService }        from '../../services/post.service';

import { Post }               from '../../models/post.model';

@Component({
  selector: 'posts',
  template: require('./posts.component.html'),
  styles: [require('./posts.component.scss')]
})
export class PostsComponent {
  posts: Array<Post>;
  
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    if(this.route.snapshot.params['term']) {
      this.postService.search(this.route.snapshot.params['term']).subscribe(res => this.posts = res);
    } else {
      this.postService.getAllPosts().subscribe(res => this.posts = res);
    }
  }
}
