import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowestRatesComponent } from './lowest-rates.component';

describe('LowestRatesComponent', () => {
  let component: LowestRatesComponent;
  let fixture: ComponentFixture<LowestRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowestRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowestRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
