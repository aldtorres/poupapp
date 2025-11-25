import { Component, computed, signal } from '@angular/core';
import { SaldoComponent } from "./saldo/saldo.component";
import { TransacoesComponent } from "./transacoes/transacoes.component";
import { ContasComponent } from "./contas/contas.component";
import { Conta } from './compartilhados/conta.model';
import { Transacao, TipoTransacao } from './compartilhados/transacao.model';

@Component({
  selector: 'app-area-financeira',
  imports: [SaldoComponent, TransacoesComponent, ContasComponent],
  templateUrl: './area-financeira.component.html',
  styleUrl: './area-financeira.component.css'
})
export class AreaFinanceiraComponent {
  saldo = computed(() => {
    const saldoAgrupado = this.contas()
                              .reduce((acc, conta) => {
                                  return acc + conta.saldo;
                              },0);

    return saldoAgrupado;
  });

  //transformar em signal!
  transacoes = signal<Transacao[]>([]);

  contasComSaldoInicial = signal<Conta[]>([]);

  contas = computed(() =>{
    return this.contasComSaldoInicial().map((contaAtual) => {
      const saldoAtualizado = this.calculaSaldoAtualizado(contaAtual);

      return { ...contaAtual, saldo: saldoAtualizado};
    })
  });
  
  //#### funções ####
  calculaSaldoAtualizado(contaInicial: Conta){
    
    const listaTransacoesDaConta = this.transacoes().filter(transacao => {
      return transacao.conta === contaInicial.nome;
    });

    const novoSaldo = listaTransacoesDaConta.reduce((acumulado, transacaoAtual) => {
      switch (transacaoAtual.tipo){
        case TipoTransacao.DEPOSITO:
          return acumulado + transacaoAtual.valor;
        case TipoTransacao.SAQUE:
          return acumulado - transacaoAtual.valor;
        default:
          transacaoAtual.tipo satisfies never;
          throw new Error(`${transacaoAtual.tipo} - Tipo de transação não identificado.`);
      }

    }, contaInicial.saldo)


    return novoSaldo;
  }

  processarTransacao(transNova : Transacao){
    this.transacoes.update((listaTransAtual) => [transNova, ...listaTransAtual]);

    
  }

  adicionarConta(novaConta : Conta){
    this.contasComSaldoInicial.update((listaContasAtual) => [novaConta, ...listaContasAtual]);
  }
}
