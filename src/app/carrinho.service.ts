import { Injectable } from '@angular/core';
import { IProdutosCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: IProdutosCarrinho[] = []

  constructor() { }

  obterCarrinho() {
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  adicionarCarrinho(produto: IProdutosCarrinho) {
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  removeProdutoCarrinho(produtoId: number) {
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }

}
