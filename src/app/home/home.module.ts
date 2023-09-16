import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelinesListComponent } from './timelines-list/timelines-list.component';
import { TimelineViewComponent } from './timeline-view/timeline-view.component';
import { HomeComponent } from './home.component';
import { DataService } from '../services/data.service';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    TimelinesListComponent,
    TimelineViewComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [
    DataService
  ]
})
export class HomeModule { }
