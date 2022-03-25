import {Component, OnDestroy, OnInit} from '@angular/core';
import {JobListCard} from '../models';
import {JobService} from '../services/job.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit, OnDestroy {
  sub: Subscription;
  totalJobs = 0;
  jobsListCard: Observable<Array<JobListCard>>;

  constructor(
    public jobService: JobService,
  ) { }

  ngOnInit(): void {
    this.jobsListCard = this.jobService.jobsListCard;
    this.calculateTotalJobs();
  }
  calculateTotalJobs() {
    this.sub = this.jobsListCard.subscribe(j => {
      this.totalJobs = j.reduce((total, jobs) => total + jobs.lists.length, 0)
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
