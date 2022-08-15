import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  quoterecu(quote:string) {
    this.User.quote = quote;
  }

  displayAge:boolean=false;

  constructor() { }

  toggle(){
    this.displayAge=!this.displayAge;
  }



  ngOnInit(): void {

  }

}
