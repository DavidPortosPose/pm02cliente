import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaGestionPage } from './empresa-gestion.page';

describe('EmpresaGestionPage', () => {
  let component: EmpresaGestionPage;
  let fixture: ComponentFixture<EmpresaGestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaGestionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaGestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
