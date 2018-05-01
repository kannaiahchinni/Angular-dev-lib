import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class ProcessflowService {

  public updateSteps: ReplaySubject<any> = new ReplaySubject<any>();
  constructor() { }
}
