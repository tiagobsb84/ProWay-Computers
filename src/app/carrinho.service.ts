import { Injectable } from '@angular/core';
import { IProdutosCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: IProdutosCarrinho[] = []

  constructor() { }

  obterCarrinho() {
    return JSON.parse(localStorage.getItem("carrinho") || "");
  }

  adicionarCarrinho(produto: IProdutosCarrinho) {
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }

}
