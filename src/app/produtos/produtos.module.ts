import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';


@NgModule({
  declarations: [
    ProdutosComponent,
    DetalheProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
