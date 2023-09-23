import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITimelinesListItem } from 'src/app/models/timelines.interface';
import { DataService } from 'src/app/services/data.service';
import { CONSTANTS } from 'src/app/shared/constants';

@Component({
  selector: 'app-timelines-list',
  templateUrl: './timelines-list.component.html',
  styleUrls: ['./timelines-list.component.scss']
})
export class TimelinesListComponent implements OnInit {
  timelinesList!: ITimelinesListItem[]
  constructor(private dataService: DataService,
              private router: Router) {}

  ngOnInit(): void {
    this.dataService.setTitleInHeader(CONSTANTS.HEADER.TIMELINE_LIST);
    this.timelinesList = this.dataService.getTimelinesList();
  }

  openTimeline(id: number) {
    this.router.navigate(['timeline', id])
  }

}
