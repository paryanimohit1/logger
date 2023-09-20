import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { dummyTimelienEvents } from 'src/assets/timeline-event.data';
import { dummyTimelinesList } from 'src/assets/timelines-list.data';

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

  getTimelinesList() {
    const timelinesList = dummyTimelinesList;
    return timelinesList;
  }

  getTimelineEventsList(timelineId: number) {
    const timelineEvents = dummyTimelienEvents;
    return timelineEvents;
  }
}
