import { Component, OnInit }        from '@angular/core';

import { PostService }      from '../../services/post.service';
@Component({
  selector: 'posts',
  template: require('./posts.component.html'),
  styles: [require('./posts.component.scss')]
})
export class PostsComponent {
  constructor(
    private postService: PostService
  ) {

  }

  ngOnInit() {
    this.postService.getAllPosts();
  }
}
