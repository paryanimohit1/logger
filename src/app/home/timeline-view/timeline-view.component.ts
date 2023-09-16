import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CONSTANTS } from 'src/app/shared/constants';

@Component({
  selector: 'app-timeline-view',
  templateUrl: './timeline-view.component.html',
  styleUrls: ['./timeline-view.component.scss']
})
export class TimelineViewComponent {

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.setTitleInHeader(CONSTANTS.HEADER.TIMELINE_VIEW);
  }

}
