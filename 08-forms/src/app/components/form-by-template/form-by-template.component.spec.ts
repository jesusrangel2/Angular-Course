import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormByTemplateComponent } from './form-by-template.component';

describe('FormByTemplateComponent', () => {
  let component: FormByTemplateComponent;
  let fixture: ComponentFixture<FormByTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormByTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormByTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
