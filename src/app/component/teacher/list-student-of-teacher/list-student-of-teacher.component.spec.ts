import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentOfTeacherComponent } from './list-student-of-teacher.component';

describe('ListStudentOfTeacherComponent', () => {
  let component: ListStudentOfTeacherComponent;
  let fixture: ComponentFixture<ListStudentOfTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStudentOfTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudentOfTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
