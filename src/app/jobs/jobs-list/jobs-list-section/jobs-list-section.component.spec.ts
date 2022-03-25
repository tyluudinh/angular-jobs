import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsListSectionComponent } from './jobs-list-section.component';

describe('JobsListSectionComponent', () => {
  let component: JobsListSectionComponent;
  let fixture: ComponentFixture<JobsListSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsListSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
