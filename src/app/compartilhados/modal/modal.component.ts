import { afterRender, Component, ElementRef, input, viewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  modal = viewChild.required<ElementRef<HTMLDialogElement>>('modalNovaTransacao')
  
  aberto = input(false);

  constructor(){
    afterRender(() => {
      if(this.aberto()){
        this.modal().nativeElement.showModal();
      }
    });
  }
}
