import { Injectable } from '@angular/core';
import { IProdutos, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: IProdutos[] = produtos;

  constructor() { }

  /*Busca pela lista*/
  getAll() {
    return this.produtos;
  }

  /*Busca por id*/
  getOne(produtoId: number) {
    return this.produtos.find(produto => produto.id == produtoId);
  }
}
