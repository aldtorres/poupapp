import { Component, input, output } from '@angular/core';
import { ContaComponent } from "./conta/conta.component";
import { Conta } from '../compartilhados/conta.model';
import { BotaoAdicionarContaComponent } from "./botao-adicionar-conta/botao-adicionar-conta.component";

@Component({
  selector: 'app-contas',
  imports: [ContaComponent, BotaoAdicionarContaComponent],
  templateUrl: './contas.component.html',
  styleUrl: './contas.component.css'
})
export class ContasComponent {
  contas = input.required<Conta[]>();

  handleConta2Criada = output<Conta>();
}
