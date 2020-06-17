import { Component, OnInit } from '@angular/core';
import { format, differenceInDays } from 'date-fns';

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
    const punchInListJSON = localStorage.getItem('punchInList');
    if (punchInListJSON) {
      const punchInList: PunchIn[] = JSON.parse(punchInListJSON);

      const filteredPunchInList = punchInList.filter((punchIn) => {
        const year = Number(punchIn.date.slice(0, 3)) + 1911;
        const month = punchIn.date.slice(3, 5);
        const date = punchIn.date.slice(5, 7);
        const hour = punchIn.time.slice(0, 2);
        const minute = punchIn.time.slice(2, 4);
        const dateTime = `${year}-${month}-${date} ${hour}:${minute}`;
        return differenceInDays(new Date(), new Date(dateTime)) < 2;
      });

      this.punchInList = filteredPunchInList;
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
