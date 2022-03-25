import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsListFilterComponent } from './jobs-list-filter.component';

describe('JobsListFilterComponent', () => {
  let component: JobsListFilterComponent;
  let fixture: ComponentFixture<JobsListFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsListFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
