import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {ISODate, Job} from '../../models';
import * as moment from 'moment';
import {JobService} from '../../services/job.service';
import {filter, map} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-jobs-list-card',
  templateUrl: './jobs-list-card.component.html',
  styleUrls: ['./jobs-list-card.component.scss']
})
export class JobsListCardComponent implements OnInit, OnDestroy {
  @Input() job: Job;
  @Output() onClickEdit: EventEmitter<Job> = new EventEmitter();
  sub: Subscription;

  constructor(
    public jobService: JobService,
  ) {
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
  }

  handleOnClickEdit() {
    this.onClickEdit.emit(this.job);
    this.sub?.unsubscribe();

    this.sub = this.jobService.modalEdit.pipe(
      filter(r => !r.visible && r.job !== null),
      map(r => r.job)
    ).subscribe(d => {
      this.job = d;
      this.sub.unsubscribe();
    });
  }
  get updatedAt() {
    return moment(this.job.updatedAt).from(new Date());
  }

}
