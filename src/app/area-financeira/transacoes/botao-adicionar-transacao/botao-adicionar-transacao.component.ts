import { Component, ElementRef, viewChild } from '@angular/core';
import { BotaoComponent } from "../../../compartilhados/botao/botao.component";

@Component({
  selector: 'app-botao-adicionar-transacao',
  imports: [BotaoComponent],
  templateUrl: './botao-adicionar-transacao.component.html',
  styleUrl: './botao-adicionar-transacao.component.css'
})
export class BotaoAdicionarTransacaoComponent {

  //modalNovaTransacao = VARIAVEL DE TEMPLATE
  //viewChild é um signal!
  modal = viewChild.required<ElementRef<HTMLDialogElement>>('modalNovaTransacao')

  abrirModal(){
    //console.log(this.modal());
    this.modal().nativeElement.showModal();
  }
}
