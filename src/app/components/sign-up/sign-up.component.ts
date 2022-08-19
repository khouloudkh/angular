import { Component, OnInit } from '@angular/core';
import { NewUser } from '../user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  model: NewUser = new NewUser();

  constructor() { }

  ngOnInit(): void {
  }

  submitted = false;

  onSubmit() {
    // form submitted
    this.submitted = true;
    console.log('form submitted');
  }

}
