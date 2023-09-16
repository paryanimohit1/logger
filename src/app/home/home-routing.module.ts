import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelinesListComponent } from './timelines-list/timelines-list.component';
import { TimelineViewComponent } from './timeline-view/timeline-view.component';

const routes: Routes = [
    {
        path: 'timelines',
        component: TimelinesListComponent
    },
    {
        path: 'timeline/:id',
        component: TimelineViewComponent,
    },
    {
        path: "**",
        redirectTo: "timelines"
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
