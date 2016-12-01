import { Component } from '@angular/core';
import { FormGroup,
         FormBuilder,
         Validators }   from '@angular/forms';

import { UserService }  from '../../services/user.service';
@Component({
  selector: 'signup',
  template: require('./signup.component.html'),
  styles: [require('./signup.component.scss')]
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.signupForm = this.formBuilder.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    })
  }

  signup(data: any) {
  this.userService.Signup(data).subscribe();
  }
}
