import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeLancamentosComponent } from './lista-de-lancamentos.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';

describe('ListaDeLancamentosComponent', () => {
  let component: ListaDeLancamentosComponent;
  let fixture: ComponentFixture<ListaDeLancamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule, BrowserAnimationsModule, MaterialModule, HttpClientModule ],
      declarations: [ ListaDeLancamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeLancamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
