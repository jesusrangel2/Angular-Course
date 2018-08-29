import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesResultsComponent } from './heroes-results.component';

describe('HeroesResultsComponent', () => {
  let component: HeroesResultsComponent;
  let fixture: ComponentFixture<HeroesResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
