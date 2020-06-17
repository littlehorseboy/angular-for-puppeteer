import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';

import { PunchIn, PeriodsOfTheDayType } from './record.model';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  public selectedValue: PeriodsOfTheDayType;
  public punchInList: PunchIn[] = [];
  constructor() { }

  ngOnInit(): void {
    this.selectedValue = 'morning';
    const punchInList = localStorage.getItem('punchInList');
    if (punchInList) {
      this.punchInList = JSON.parse(punchInList);
    } else {
      this.punchInList = [];
    }
  }

  public onClick(): void {
    if (!this.selectedValue) {
      alert('請選擇早上或是下午');
      return;
    }

    const date = new Date();

    this.punchInList = [
      ...this.punchInList,
      {
        date: `${Number(format(date, 'yyyy')) - 1911}${format(date, 'MMdd')}`,
        time: format(date, 'hhmm'),
        periodsOfTheDay: this.selectedValue,
      },
    ];

    localStorage.setItem('punchInList', JSON.stringify(this.punchInList));
  }
}
