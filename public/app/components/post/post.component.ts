import { Component, Input, ElementRef } from '@angular/core';

import { Post }             from '../../models/post.model';
import { PostService }      from '../../services/post.service';

@Component({
  selector: 'post',
  template: require('./post.component.html'),
  styles: [require('./post.component.scss')]
})
export class PostComponent {
  private _post: Post;
  private selectedImageSrc: String;

  constructor(
    private postService: PostService,
    private el: ElementRef
  ) {

  }

  @Input()
  set post(post: Post) {
    this._post = (post);
  }
  get post(): Post { return this._post; }

  getImgUrl(post) {
    return `api/uploads/${post.image_url}`;
  }

  fullScreenImage(e) {
    document.body.style.overflow = 'hidden';
    this.el.nativeElement.querySelector('div').classList.add('overlay-active');
    this.selectedImageSrc = e.target.currentSrc;
  }

  hideOverlay(e) {
    document.body.style.overflow = 'auto';
    this.el.nativeElement.querySelector('div').classList.remove('overlay-active');
    this.selectedImageSrc = null;
  }
}
