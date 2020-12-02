import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meu-projeto-limpo';

  lista = [
    {
      nome: 'Oi'
    },
    {
      nome: 'Tudo bem?'
    }
  ];

  escolha = 1;

  funcaoDeLog() {
    console.log(this.title);
  }
}
