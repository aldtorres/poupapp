import { afterRender, Directive, ElementRef } from "@angular/core";

//somente para atributos personalizados
//DECORATOR
@Directive({
    selector: '[appDestaqueValorNumericoDirective]' 
})
export class DestaqueValorNumericoDirective {

    //ElementRef ref do elemento do DOm = > iNJE.dep
    constructor(elemento : ElementRef<HTMLElement>){
        console.log('DIRETIVA --> DestaqueValorNumericoDirective APLICADO!')
        console.log(elemento)

        afterRender(() =>{
            //sempre dentro do afterRender, alterar apenas após renderizar!
            elemento.nativeElement.style.color = "var(--destaque-receita)";
            //elemento.nativeElement.style.color = "green";
        });
        
    }
}