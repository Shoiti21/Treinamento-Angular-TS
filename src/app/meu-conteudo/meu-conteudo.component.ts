import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-conteudo',
  templateUrl: './meu-conteudo.component.html',
  styleUrls: ['./meu-conteudo.component.css']
})
export class MeuConteudoComponent implements OnInit {
  minhaVariavel = false;

  ngClassObj = {
    'minha-classe-true' : this.minhaVariavel,
    'minha-classe-false' : !this.minhaVariavel
  }

  ngModelText = 'Meu texto';

  constructor() { }

  ngOnInit(): void {
  }

  logText(): void {
    console.log(this.ngModelText);
  }

}
