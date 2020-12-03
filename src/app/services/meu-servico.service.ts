import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeuServicoService {
  minhaVariavel = 'Hello!';

  constructor(
    private http: HttpClient,
  ) { }

  getItens(): Array<any> {
    return [
      {
        nome: 'João'
      },
      {
        nome: 'Maria'
      },
      {
        nome: 'Eliana'
      }
    ];
  }

  getHttp(): Promise<any> {
    /* return this.http.get('https://jsonplaceholder.typicode.com/todos/1'); */
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1').toPromise();
  }

}
