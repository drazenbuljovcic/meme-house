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
