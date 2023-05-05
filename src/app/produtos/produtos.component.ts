import { Component, OnInit } from '@angular/core';
import { IProdutos, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  
  prod: IProdutos[] = produtos;

  constructor(private produtoService: ProdutosService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const produtos = this.produtoService.getAll();

    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLocaleLowerCase();

      if(descricao) {
        this.prod = produtos.filter(produto => produto.descricao.toLocaleLowerCase().includes(descricao));
        return;
      }
      this.prod = produtos;
    })
  }
}
