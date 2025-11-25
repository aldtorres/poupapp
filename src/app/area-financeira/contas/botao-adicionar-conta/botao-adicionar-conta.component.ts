import { Component, NgModuleFactory, output, signal } from '@angular/core';
import { BotaoComponent } from "../../../compartilhados/botao/botao.component";
import { ModalComponent } from "../../../compartilhados/modal/modal.component";
import { FormsModule } from '@angular/forms';
import { Conta } from '../../compartilhados/conta.model';

@Component({
  selector: 'app-botao-adicionar-conta',
  imports: [BotaoComponent, ModalComponent, FormsModule],
  templateUrl: './botao-adicionar-conta.component.html',
  styleUrl: './botao-adicionar-conta.component.css'
})
export class BotaoAdicionarContaComponent {
  //## signal ##
  handleContaCriada = output<Conta>();
  
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
    
    const novaConta = new Conta(
      this.novaContaForm.nome,
      Number(this.novaContaForm.saldoInicial)
    );
    this.handleContaCriada.emit(novaConta);

    this.blnAbrirModal.set(false);
    this.novaContaForm.nome = '';
    this.novaContaForm.saldoInicial = '';
  }


}
