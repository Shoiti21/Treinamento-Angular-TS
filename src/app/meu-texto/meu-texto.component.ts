import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-texto',
  templateUrl: './meu-texto.component.html',
  styleUrls: ['./meu-texto.component.css']
})
export class MeuTextoComponent implements OnInit {
  meuTexto = 'Este é meu texto!';

  constructor() { }

  ngOnInit(): void {
  }

}
