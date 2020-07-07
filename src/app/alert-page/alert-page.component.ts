import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-page',
  templateUrl: './alert-page.component.html',
  styleUrls: ['./alert-page.component.scss']
})
export class AlertPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public alertMessage(): void {
    const time = new Date().getTime();

    if (time % 2 === 0) {
      alert('message');
    } else {
      location.reload();
    }

  }
}
