import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClasessComponent } from './ng-clasess.component';

describe('NgClasessComponent', () => {
  let component: NgClasessComponent;
  let fixture: ComponentFixture<NgClasessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClasessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClasessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
