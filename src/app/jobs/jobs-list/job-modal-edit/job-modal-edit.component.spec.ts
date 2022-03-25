import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobModalEditComponent } from './job-modal-edit.component';

describe('JobModalEditComponent', () => {
  let component: JobModalEditComponent;
  let fixture: ComponentFixture<JobModalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobModalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
