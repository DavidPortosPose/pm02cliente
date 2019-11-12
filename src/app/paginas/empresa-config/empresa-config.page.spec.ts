import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaConfigPage } from './empresa-config.page';

describe('EmpresaConfigPage', () => {
  let component: EmpresaConfigPage;
  let fixture: ComponentFixture<EmpresaConfigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaConfigPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
