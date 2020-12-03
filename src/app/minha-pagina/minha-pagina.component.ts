import { Component, OnInit } from '@angular/core';
import { MeuServicoService } from '../services/meu-servico.service';

@Component({
  selector: 'app-minha-pagina',
  templateUrl: './minha-pagina.component.html',
  styleUrls: ['./minha-pagina.component.css']
})
export class MinhaPaginaComponent implements OnInit {
  itens: Array<any> = [];

  constructor(
    private meuServiceService: MeuServicoService
  ) { }

  ngOnInit(): void {
    console.log(this.meuServiceService.minhaVariavel);
    this.itens = this.meuServiceService.getItens();

    /* this.meuServiceService.getHttp()
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.error(error);
        }); */

    this.meuServiceService.getHttp()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

    setTimeout(() => {
      this.meuServiceService.minhaVariavel = 'World';
      console.log(this.meuServiceService.minhaVariavel);
    }, 2000);
  }

}
