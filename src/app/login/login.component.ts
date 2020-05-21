import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model = {
    account: '',
    password: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert(JSON.stringify(this.model));
  }
}
