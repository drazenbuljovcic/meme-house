import { Component, OnInit } from '@angular/core';
import { FormGroup, 
         FormBuilder,
         Validators }        from '@angular/forms';

import { PostService }       from '../../services/post.service'; 
@Component({
  selector: 'search',
  template: require('./search.component.html'),
  styles: [require('./search.component.scss')]
})
export class SearchComponent {
  searchForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService
  ) {
    this.searchForm = this.formBuilder.group({
      'term': null
    })
  }
  
  redirectToSearch(term) {
    this.postService.redirectToSearch(term.term);
  }
}
