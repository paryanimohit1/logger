import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelinesListComponent } from './timelines-list/timelines-list.component';
import { TimelineViewComponent } from './timeline-view/timeline-view.component';
import { DataService } from '../services/data.service';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    TimelinesListComponent,
    TimelineViewComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    DataService
  ]
})
export class HomeModule { }
