import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificaoService } from 'src/app/notificao.service';
import { IProdutos } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})

export class DetalheProdutoComponent implements OnInit {

  produto: IProdutos | undefined;

  quantidade = 1;

  constructor(
    private produtoService: ProdutosService, 
    private route: ActivatedRoute,
    private notificacaoService: NotificaoService
    ) {}

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;
    const produtoId = Number(routeParam.get("id"));
    this.produto = this.produtoService.getOne(produtoId); 
  }

  adicionarAoCarrinho() {
    this.notificacaoService.notificar("O produto foi adicionar ao carrinho");
  }
}
