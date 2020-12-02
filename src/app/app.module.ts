import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuHeaderComponent } from './meu-header/meu-header.component';
import { MeuConteudoComponent } from './meu-conteudo/meu-conteudo.component';
import { FormsModule } from '@angular/forms';
import { RedDirective } from './red.directive';
import { MeuArrayComponent } from './meu-array/meu-array.component';
import { FormatarPipe } from './formatar.pipe';
import { MeuTextoComponent } from './meu-texto/meu-texto.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuHeaderComponent,
    MeuConteudoComponent,
    RedDirective,
    MeuArrayComponent,
    FormatarPipe,
    MeuTextoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
