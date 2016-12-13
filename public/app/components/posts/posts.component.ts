import { Component, OnInit }  from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

import { MasonryOptions } from 'angular2-masonry';

import { PostService }        from '../../services/post.service';

import { Post }               from '../../models/post.model';

@Component({
  selector: 'posts',
  template: require('./posts.component.html'),
  styles: [require('./posts.component.scss')]
})
export class PostsComponent {
  posts: Array<Post>;
  
  public myOptions: MasonryOptions = {
  };
  
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const term = params['term'];
      if(term) {
        this.postService.search(term).subscribe(res => this.posts = res);
      } else {
        this.postService.getAllPosts().subscribe(res => this.posts = res);
      }
    });
  }
}
