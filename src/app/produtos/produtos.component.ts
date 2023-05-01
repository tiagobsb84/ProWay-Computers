import { Component, OnInit } from '@angular/core';
import { IProdutos, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  
  prod: IProdutos[] = produtos;

  constructor(private produtoService: ProdutosService) {}

  ngOnInit(): void {
    this.produtoService.getAll();
  }
}
