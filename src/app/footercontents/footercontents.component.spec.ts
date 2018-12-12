import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootercontentsComponent } from './footercontents.component';

describe('FootercontentsComponent', () => {
  let component: FootercontentsComponent;
  let fixture: ComponentFixture<FootercontentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootercontentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootercontentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
