import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [],
})
export class LoginComponent {
  userName!: string;
  password!: string;
  constructor() {}

  // validation() {
  //   if (this.userName == '' && this.password == '') {
  //     console.log('verified');
  //   } else {
  //     console.log('Invalid Username or password');
  //   }
  // }
}
