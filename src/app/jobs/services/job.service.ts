import { Injectable } from '@angular/core';
import {Country, Department, ISODate, Job, JobListCard, JobsFilter, Level, ModalEditJob, Type} from '../models';
import data from './data';
import {BehaviorSubject} from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  departments: Array<Department> = [];
  jobs: Array<Job> = [];
  countries: Array<Country> = [];
  types: Array<Type> = [];
  levels: Array<Level> = [];

  private modalEditSource = new BehaviorSubject<ModalEditJob>({
    visible: false,
    job: null
  });
  modalEdit = this.modalEditSource.asObservable();


  private jobsListCardSource: BehaviorSubject<Array<JobListCard>> = new BehaviorSubject<Array<JobListCard>>([]);
  jobsListCard = this.jobsListCardSource.asObservable();

  constructor() {
    this.initStaticData();
  }

  private initStaticData() {
    this.departments = data.departments;

    this.jobs = data.jobs;

    this.types = data.types;

    this.countries = data.countries;

    this.levels = data.levels;

    this.setJobsListCard();
  }
  private setJobsListCard(jobs = this.jobs) {
    const jobsListCard = Object.values(
      jobs.reduce((obj, j) => {
        const v = obj[j.department];
        const jobCard: JobListCard = {
          department: j.department,
          lists: v?.lists || []
        };
        jobCard.lists.push(j);
        obj[j.department] = jobCard;
        return obj;
      }, {} as Record<string, JobListCard>)
    );

    this.jobsListCardSource.next(jobsListCard);
  }

  updateModalEdit(value: ModalEditJob) {
    this.modalEditSource.next(value);
  }

  onFilter(jobsFilter: JobsFilter) {
    const { department, search, location } = jobsFilter;

    const condition = (job: Job) => {
      let res = true;
      if (search) {
        res = res && job.title === search;
      }

      if (department) {
        res = job.department === department;
      }
      if (location) {
        res = res && job.location === location;
      }
      return res;
    };
    const jobs = this.jobs.filter(j => condition(j));
    this.setJobsListCard(jobs);
  }
}
