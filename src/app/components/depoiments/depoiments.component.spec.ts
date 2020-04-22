import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoimentsComponent } from './depoiments.component';

describe('DepoimentsComponent', () => {
  let component: DepoimentsComponent;
  let fixture: ComponentFixture<DepoimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepoimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepoimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
