import { Component, OnInit, Input } from '@angular/core';

export interface DadosDomicilioBancario {
  codigoBanco: number;
  numeroAgencia: number;
  numeroContaCorrente: string;
}

export interface LancamentoContaCorrenteCliente {
  numeroRemessaBanco: any;
  nomeSituacaoRemessa: string;
  dadosDomicilioBancario: DadosDomicilioBancario;
  nomeTipoOperacao: string;
  dadosAnaliticoLancamentoFinanceiroCliente: any[];
}

export interface ListaControleLancamento {
  lancamentoContaCorrenteCliente: LancamentoContaCorrenteCliente;
  dataEfetivaLancamento: string;
  dataLancamentoContaCorrenteCliente: string;
  numeroEvento: number;
  descricaoGrupoPagamento: string;
  codigoIdentificadorUnico: string;
  nomeBanco: string;
  quantidadeLancamentoRemessa: number;
  numeroRaizCNPJ: string;
  numeroSufixoCNPJ: string;
  valorLancamentoRemessa: number;
  dateLancamentoContaCorrenteCliente: any;
  dateEfetivaLancamento: any;
  dadosBancarios: string;
}

@Component({
  selector: 'app-lista-de-lancamentos',
  templateUrl: './lista-de-lancamentos.component.html',
  styleUrls: ['./lista-de-lancamentos.component.css']
})
export class ListaDeLancamentosComponent implements OnInit {

  @Input() lancamentos: ListaControleLancamento[];

  dataSource: ListaControleLancamento[];
  displayedColumns: string[] = ['dataEfetivaLancamento', 'lancamentoContaCorrenteCliente.nomeTipoOperacao'
    , 'lancamentoContaCorrenteCliente.numeroRemessaBanco', 'lancamentoContaCorrenteCliente.nomeSituacaoRemessa',
    'dadosBancarios', 'valorLancamentoRemessa'];
  constructor() { }

  ngOnInit() {
    this.dataSource = this.lancamentos;
    console.log(this.dataSource);

  }

}