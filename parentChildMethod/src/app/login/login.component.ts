import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Input() userLogin: { email: string, password: string }[] = [];

  onClickEvent(loginForm: NgForm) {
    console.log(this.userLogin);
    
    const { mail, passwd } = loginForm.value;
    for (var i = 0; i < this.userLogin.length; i++) {
      console.log('In for loop');
      if (this.userLogin[i].email === loginForm.value.email && this.userLogin[i].password === loginForm.value.password) {
        console.log(this.userLogin[i]);
        console.log("Welcome! Login Success.");
        break; // Exit the function since login is successful
      }
      else {
        console.log("Login Failed!");
      }
    }
  }

}
