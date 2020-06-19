import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PunchIn } from './record.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getPunchInList(): Observable<PunchIn[]> {
    return this.httpClient.get<PunchIn[]>('http://localhost:3000');
  }
}
