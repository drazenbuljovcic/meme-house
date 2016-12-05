import { Component, Input } from '@angular/core';

import { Post }             from '../../models/post.model';
import { PostService }      from '../../services/post.service';

@Component({
  selector: 'post',
  template: require('./post.component.html'),
  styles: [require('./post.component.scss')]
})
export class PostComponent {
  private _post: Post;
  
  constructor(
    private postService: PostService
  ) {

  }

  @Input()
  set post(post: Post) {
    this._post = (post);
  }
  get post(): Post { return this._post; }

  ngOnInit() {
    console.log(this._post);
  }
}
