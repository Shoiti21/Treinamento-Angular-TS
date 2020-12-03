import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MinhaPaginaComponent } from './minha-pagina/minha-pagina.component';
import { MinhaPagina2Component } from './minha-pagina2/minha-pagina2.component';

const routes: Routes = [
  { path: '', redirectTo: '/minha-pagina', pathMatch: 'full' },
  { path: 'minha-pagina', component: MinhaPaginaComponent },
  { path: 'minha-pagina-2', component: MinhaPagina2Component },
  /* { path: 'outro-modulo', loadChildren: () => import('').then((mod) => mod.NomeDoModulo) } */
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
