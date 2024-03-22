import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  users: any = [];

  registerEvent(registerData:any){
    this.users.push(registerData);
    console.log(registerData);
    }

}
