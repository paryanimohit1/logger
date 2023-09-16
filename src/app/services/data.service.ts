import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _headerTitle = new BehaviorSubject<String>('Timeline');

  constructor() { }

  setTitleInHeader(headerText: String) {
    this._headerTitle.next(headerText);
  }

  public get headerTitle() {
    return this._headerTitle;
  }
}
