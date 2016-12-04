import { Component }    from '@angular/core';

import { UserService }  from '../../services/user.service';

@Component({
  selector: 'header-component',
  template: require('./header.component.html'),
  styles: [require('./header.component.scss')]
})
export class HeaderComponent {
  constructor(
    private userService: UserService
  ) {
    
  }
}
