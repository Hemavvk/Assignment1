import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterbannerComponent } from './footerbanner.component';

describe('FooterbannerComponent', () => {
  let component: FooterbannerComponent;
  let fixture: ComponentFixture<FooterbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
