import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasePoolComponent } from './case-pool.component';

describe('CasePoolComponent', () => {
  let component: CasePoolComponent;
  let fixture: ComponentFixture<CasePoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasePoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasePoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
