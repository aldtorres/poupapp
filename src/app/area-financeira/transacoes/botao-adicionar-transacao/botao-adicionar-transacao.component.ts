import { Component, effect, signal } from '@angular/core';
import { BotaoComponent } from "../../../compartilhados/botao/botao.component";
import { ModalComponent } from "../../../compartilhados/modal/modal.component";
import { FormsModule } from "@angular/forms"
import { TipoTransacao, Transacao } from '../../compartilhados/transacao.model';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-botao-adicionar-transacao',
  imports: [BotaoComponent, ModalComponent, FormsModule, KeyValuePipe],
  templateUrl: './botao-adicionar-transacao.component.html',
  styleUrl: './botao-adicionar-transacao.component.css'
})
export class BotaoAdicionarTransacaoComponent {

  tiposTransacao = TipoTransacao;
  
  //modalNovaTransacao = VARIAVEL DE TEMPLATE
  //viewChild é um signal!
  blnAbrirModal = signal(false)

  novaTransacaoForm ={
    nome: '',
    tipo: '',
    valor: '',
    data: '',
    conta: ''
  }

  constructor(){
    //somente para depurar e verificar se o valor está alterando!
    effect(() => {
      console.log('blnAbrirModal: ', this.blnAbrirModal());
    });
  }

  abrirModal(){
    this.blnAbrirModal.set(true);
  }

  aoSubmeter(){
    console.log('enviado formulario....');
    console.log(this.novaTransacaoForm);
    const novaTransacao = new Transacao(
      this.novaTransacaoForm.nome, 
      this.novaTransacaoForm.tipo as TipoTransacao, 
      Number(this.novaTransacaoForm.valor) , 
      this.novaTransacaoForm.data, 
      this.novaTransacaoForm.conta
    )
    
    console.log('cconvertido....');
    console.log(novaTransacao);
  }

}
