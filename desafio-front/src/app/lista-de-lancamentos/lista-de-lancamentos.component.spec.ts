import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeLancamentosComponent } from './lista-de-lancamentos.component';

describe('ListaDeLancamentosComponent', () => {
  let component: ListaDeLancamentosComponent;
  let fixture: ComponentFixture<ListaDeLancamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
