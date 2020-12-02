import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-meu-header',
  templateUrl: './meu-header.component.html',
  styleUrls: ['./meu-header.component.css']
})
export class MeuHeaderComponent implements OnInit {
  @Input() titulo: String;
  @Input() mensagem : String;
  @Output() funcao : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  meuClique() {
    this.funcao.emit();
  }

}
