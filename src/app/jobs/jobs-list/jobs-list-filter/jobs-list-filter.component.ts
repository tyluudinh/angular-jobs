import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Country, Department, Type} from '../../models';
import {JobService} from '../../services/job.service';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-jobs-list-filter',
  templateUrl: './jobs-list-filter.component.html',
  styleUrls: ['./jobs-list-filter.component.scss']
})
export class JobsListFilterComponent implements OnInit {
  form: FormGroup;
  departments: Array<Department> = [];
  countries: Array<Country> = [];
  types: Array<Type> = [];

  constructor(
    private formBuilder: FormBuilder,
    private jobService: JobService,
  ) { }

  ngOnInit(): void {
    this.initDataSources();
    this.form = this.formBuilder.group({
      search: ['', []],
      department: ['', []],
      location: ['', []],
      type: ['', []],
    });
    this.subscribeOnChange();
  }

  initDataSources() {
    this.departments = this.jobService.departments;
    this.countries = this.jobService.countries;
    this.types = this.jobService.types;
  }

  subscribeOnChange() {
    this.form.valueChanges.subscribe(s => {
      this.jobService.onFilter(s);
    });
  }

}
