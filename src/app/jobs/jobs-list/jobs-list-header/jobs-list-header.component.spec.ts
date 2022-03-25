import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsListHeaderComponent } from './jobs-list-header.component';

describe('JobsListHeaderComponent', () => {
  let component: JobsListHeaderComponent;
  let fixture: ComponentFixture<JobsListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
