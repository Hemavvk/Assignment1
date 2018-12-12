import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcardsComponent } from './studentcards.component';

describe('StudentcardsComponent', () => {
  let component: StudentcardsComponent;
  let fixture: ComponentFixture<StudentcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
