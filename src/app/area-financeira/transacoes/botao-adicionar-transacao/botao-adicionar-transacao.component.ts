import { Component, effect, signal } from '@angular/core';
import { BotaoComponent } from "../../../compartilhados/botao/botao.component";
import { ModalComponent } from "../../../compartilhados/modal/modal.component";

@Component({
  selector: 'app-botao-adicionar-transacao',
  imports: [BotaoComponent, ModalComponent],
  templateUrl: './botao-adicionar-transacao.component.html',
  styleUrl: './botao-adicionar-transacao.component.css'
})
export class BotaoAdicionarTransacaoComponent {

  //modalNovaTransacao = VARIAVEL DE TEMPLATE
  //viewChild é um signal!
  blnAbrirModal = signal(false)


  constructor(){
    //somente para depurar e verificar se o valor está alterando!
    effect(() => {
      console.log('blnAbrirModal: ', this.blnAbrirModal());
    });
  }

  abrirModal(){
    this.blnAbrirModal.set(true);
  }
}
