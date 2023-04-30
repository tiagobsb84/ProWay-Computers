import { Component } from '@angular/core';
import { IProdutos, produtos } from '../produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  
  prod: IProdutos[] = produtos;
}
