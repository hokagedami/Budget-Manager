import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingLimitPage } from './spending-limit.page';

describe('SpendingLimitPage', () => {
  let component: SpendingLimitPage;
  let fixture: ComponentFixture<SpendingLimitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendingLimitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendingLimitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
