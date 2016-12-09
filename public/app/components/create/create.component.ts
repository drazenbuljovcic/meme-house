import { Component }    from '@angular/core';

import { PostService }  from '../../services/post.service';

@Component({
  selector: 'create-component',
  template: require('./create.component.html'),
  styles: [require('./create.component.scss')]
})
export class CreateComponent {
  constructor(
    private postService: PostService
  ) {
    
  }
}
