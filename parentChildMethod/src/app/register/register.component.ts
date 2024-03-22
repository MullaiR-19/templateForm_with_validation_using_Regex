import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { NgForm, FormControl, AbstractControl, ValidationErrors, Validators, FormGroup } from '@angular/forms';
import { error } from 'console';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {

  @Output() dataCarrage: EventEmitter<{ name: string, email: string, age: number, password: string }> = new EventEmitter();

  registerEvent(registerForm: NgForm) {
    const { name, sname, email, number, age, password } = registerForm.value;
    if (registerForm.valid) {
      if (this.nameChecker(name)) {
        if (this.emailChecker(email)) {
          if (this.numberChecker(number)) {
            if (this.ageChecker(age)) {
              if (this.passwordChecker(password)) {
                console.log("Registration Success!");
                alert("Registration Success!")
              }
            }
          }
        }
      }
    } 
    
    else {
      alert('Missing some data!');
    }
  }

  nameChecker(name: string) {
    const regex = /^[a-zA-Z]+$/;
    if (regex.test(name)) {
      return true;
    } else {
      alert("Invalid name! Name should contain only characters.");
      return false;
    }
  }
  
  emailChecker(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
      return true;
    } else {
      alert("Please enter a valid e-mail address.");
      return false;
    }
  }
  
  numberChecker(number: string) {
    const regex = /^\d{10}$/;
    if (regex.test(number)) {
      return true;
    } else {
      alert("Invalid mobile number! Please enter 10 digits.");
      return false;
    }
  }
  
  ageChecker(age: number) {
    if (age >= 18 && age <= 65) {
      return true;
    } else {
      alert("Age should be between 18 and 65.");
      return false;
    }
  }
  
  passwordChecker(password: string) {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    if (regex.test(password)) {
      return true;
    } else {
      alert("Password should contain:\n1. At least one uppercase letter\n2. At least one number\n3. At least one special character.");
      return false;
    }
  }
}