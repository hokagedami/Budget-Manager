import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpendingPage } from './add-spending.page';

describe('AddSpendingPage', () => {
  let component: AddSpendingPage;
  let fixture: ComponentFixture<AddSpendingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSpendingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpendingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
