import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoContaComponent } from './extrato-conta-cielo.component';

describe('ExtratoContaCieloComponent', () => {
  let component: ExtratoContaComponent;
  let fixture: ComponentFixture<ExtratoContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
