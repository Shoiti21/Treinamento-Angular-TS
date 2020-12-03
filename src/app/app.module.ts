import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChangeColorDirective } from './change-color.directive';
import { FormatarPipe } from './formatar.pipe';
import { MeuArrayComponent } from './meu-array/meu-array.component';
import { MeuConteudoComponent } from './meu-conteudo/meu-conteudo.component';
import { MeuHeaderComponent } from './meu-header/meu-header.component';
import { MeuTextoComponent } from './meu-texto/meu-texto.component';
import { MinhaPaginaComponent } from './minha-pagina/minha-pagina.component';
import { RedDirective } from './red.directive';


@NgModule({
  declarations: [
    AppComponent,
    MeuHeaderComponent,
    MeuConteudoComponent,
    RedDirective,
    MeuArrayComponent,
    FormatarPipe,
    MeuTextoComponent,
    ChangeColorDirective,
    MinhaPaginaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
