import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtratoContaService {

  constructor(private http: HttpClient) { }

  public get(): Observable<any> {
    return this.http.get('/extrato');
  }
}