import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaEditPage } from './empresa-edit.page';

describe('EmpresaEditPage', () => {
  let component: EmpresaEditPage;
  let fixture: ComponentFixture<EmpresaEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
