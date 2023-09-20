import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITimelineEvent } from 'src/app/models/timelines.interface';
import { DataService } from 'src/app/services/data.service';
import { CONSTANTS } from 'src/app/shared/constants';

@Component({
  selector: 'app-timeline-view',
  templateUrl: './timeline-view.component.html',
  styleUrls: ['./timeline-view.component.scss']
})
export class TimelineViewComponent {
  timelineEvents!: ITimelineEvent[];

  constructor(private dataService: DataService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.dataService.setTitleInHeader(CONSTANTS.HEADER.TIMELINE_VIEW);
    this.timelineEvents = this.dataService.getTimelineEventsList(this.route.snapshot.params['id']);
  }

}
