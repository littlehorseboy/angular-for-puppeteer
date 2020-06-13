import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.model.account === '123' && this.model.password === '321') {
      this.router.navigate(['/record']);
    } else {
      alert('帳號或密碼錯誤！');
    }
  }
}
