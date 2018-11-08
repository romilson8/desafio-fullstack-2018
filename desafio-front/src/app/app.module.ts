import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDeLancamentosComponent} from './lista-de-lancamentos/lista-de-lancamentos.component';
import { ExtratoContaComponent } from './extrato-conta-cielo/extrato-conta-cielo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    ListaDeLancamentosComponent,
    ExtratoContaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
