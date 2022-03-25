import {Component, Input, OnInit} from '@angular/core';
import {Job, JobListCard} from '../../models';
import {JobService} from '../../services/job.service';

@Component({
  selector: 'app-jobs-list-section',
  templateUrl: './jobs-list-section.component.html',
  styleUrls: ['./jobs-list-section.component.scss']
})
export class JobsListSectionComponent implements OnInit {
  @Input() jobsList: JobListCard;

  constructor(
    public jobService: JobService
  ) { }

  ngOnInit(): void {
  }

  handleOnClickEdit(job: Job) {
    this.jobService.updateModalEdit({
      visible: true,
      job
    });
  }

}
