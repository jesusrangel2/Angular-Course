import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormByDataComponent } from './form-by-data.component';

describe('FormByDataComponent', () => {
  let component: FormByDataComponent;
  let fixture: ComponentFixture<FormByDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormByDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormByDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
