import { Component, effect, signal } from '@angular/core';
import { BotaoComponent } from "../../../compartilhados/botao/botao.component";
import { ModalComponent } from "../../../compartilhados/modal/modal.component";
import { FormsModule } from "@angular/forms"

@Component({
  selector: 'app-botao-adicionar-transacao',
  imports: [BotaoComponent, ModalComponent, FormsModule],
  templateUrl: './botao-adicionar-transacao.component.html',
  styleUrl: './botao-adicionar-transacao.component.css'
})
export class BotaoAdicionarTransacaoComponent {

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
  }

}
