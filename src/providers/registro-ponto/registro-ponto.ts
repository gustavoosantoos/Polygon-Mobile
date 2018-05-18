import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RegistroPonto } from '../../model/registro-ponto';

const BASE_URL = "http://localhost:52751/api/RegistroPonto";

@Injectable()
export class RegistroPontoProvider {

  constructor(private http: HttpClient) {
    console.log('Hello RegistroPontoProvider Provider');
  }

  registrarPonto(registro: RegistroPonto): Observable<any> {
    return this.http.post<any>(BASE_URL, registro);
  }
}
