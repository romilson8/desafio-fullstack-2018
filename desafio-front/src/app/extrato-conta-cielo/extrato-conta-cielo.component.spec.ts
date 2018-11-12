import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoContaComponent } from './extrato-conta-cielo.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';

describe('ExtratoContaCieloComponent', () => {
  let component: ExtratoContaComponent;
  let fixture: ComponentFixture<ExtratoContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule, BrowserAnimationsModule, MaterialModule, HttpClientModule ],
      declarations: [ ExtratoContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtratoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
