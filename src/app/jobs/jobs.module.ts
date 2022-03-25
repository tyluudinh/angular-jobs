import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';
import {TooltipModule} from 'primeng/tooltip';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobsListHeaderComponent } from './jobs-list/jobs-list-header/jobs-list-header.component';
import { JobsListFilterComponent } from './jobs-list/jobs-list-filter/jobs-list-filter.component';
import {SharedModule} from '../shared/shared.module';
import { JobsListCardComponent } from './jobs-list/jobs-list-card/jobs-list-card.component';
import { JobsListSectionComponent } from './jobs-list/jobs-list-section/jobs-list-section.component';
import { JobModalEditComponent } from './jobs-list/job-modal-edit/job-modal-edit.component';


@NgModule({
  declarations: [JobsListComponent, JobsListHeaderComponent, JobsListFilterComponent, JobsListCardComponent, JobsListSectionComponent, JobModalEditComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    TooltipModule
  ]
})
export class JobsModule { }
