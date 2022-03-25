import {Component, Input, OnInit} from '@angular/core';
import {Job, ModalEditJob} from '../../models';
import {JobService} from '../../services/job.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-job-modal-edit',
  templateUrl: './job-modal-edit.component.html',
  styleUrls: ['./job-modal-edit.component.scss']
})
export class JobModalEditComponent implements OnInit {
  job: Job;
  data: Observable<ModalEditJob>;
  form: FormGroup;

  constructor(
    public jobService: JobService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.data = this.jobService.modalEdit;
    this.data.pipe(map(res => res.job)).subscribe(d => {
      if (d) {
        this.job = d;
        this.initForm();
      }
    });
  }

  initForm() {
    this.form = this.formBuilder.group({
      title: [this.job?.title || '', [
        Validators.required,
        Validators.max(200),
        Validators.min(5)
      ]],
      location: [this.job?.location || '', Validators.required],
      level: [this.job?.level || '', Validators.required],
    });
  }

  onChangeVisible(value: boolean) {
    this.jobService.updateModalEdit({
      visible: value,
      job: null
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.jobService.updateModalEdit({
      visible: false,
      job: {
        ...this.job,
        ...this.form.getRawValue(),
        updatedAt: new Date().toISOString(),
      }
    });
  }
}
