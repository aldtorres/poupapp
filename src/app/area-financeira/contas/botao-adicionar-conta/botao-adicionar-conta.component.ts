import { Component, NgModuleFactory, signal } from '@angular/core';
import { BotaoComponent } from "../../../compartilhados/botao/botao.component";
import { ModalComponent } from "../../../compartilhados/modal/modal.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-botao-adicionar-conta',
  imports: [BotaoComponent, ModalComponent, FormsModule],
  templateUrl: './botao-adicionar-conta.component.html',
  styleUrl: './botao-adicionar-conta.component.css'
})
export class BotaoAdicionarContaComponent {
  //## signal ##
  //handleTransacaoCriada = output<Transacao>();
  
  //modalNovaTransacao = VARIAVEL DE TEMPLATE
  //viewChild é um signal!
  blnAbrirModal = signal(false)

  //## internos componente ##
  
  novaContaForm ={
    nome: '',
    saldoInicial: ''
  }

  //## funções
    //## funcoes ##
  abrirModal(){
    this.blnAbrirModal.set(true);
  }
  
  aoSubmeter(){
    console.log(this.novaContaForm);
  }


}
