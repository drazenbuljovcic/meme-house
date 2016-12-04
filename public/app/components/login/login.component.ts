import { Component }    from '@angular/core';
import { FormGroup,
         FormBuilder,
         Validators }   from '@angular/forms';

import { UserService }  from '../../services/user.service';

@Component({
  selector: 'login',
  template: require('./login.component.html'),
  styles: [require('./login.component.scss')]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    })
  }

  ngOnInit() {
    this.userService.redirectIfUserIsLoggedIn();
  }
  
  login(data: any) {
    this.userService.Login(data)
  }
}
