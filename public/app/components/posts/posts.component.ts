import { Component, OnInit }  from '@angular/core';

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
    private postService: PostService
  ) {

  }

  ngOnInit() {
    this.postService.getAllPosts().subscribe(res => this.posts = res);
  }
}
