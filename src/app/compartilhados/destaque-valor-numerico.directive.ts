import { afterRender, Directive, ElementRef, input } from "@angular/core";

//somente para atributos personalizados
//DECORATOR
@Directive({
    selector: '[appDestaqueValorNumericoDirective]' 
})
export class DestaqueValorNumericoDirective {

    //inpu requerido
    appDestaqueValorNumericoDirective = input.required<number>();
    //input opcional
    corPositiva = input("var(--destaque-receita)")
    corNegativa = input("var(--destaque-despesa)")

    //ElementRef ref do elemento do DOm = > iNJE.dep
    constructor(elemento : ElementRef<HTMLElement>){
        console.log('DIRETIVA --> DestaqueValorNumericoDirective APLICADO!')
        console.log(elemento)

        afterRender(() =>{
            console.log('appDestaqueValorNumericoDirective: ' + this.appDestaqueValorNumericoDirective());
            //sempre dentro do afterRender, alterar apenas após renderizar!
            
            if(this.appDestaqueValorNumericoDirective() > 0){
                elemento.nativeElement.style.color = this.corPositiva();
            }else if(this.appDestaqueValorNumericoDirective() < 0){
                elemento.nativeElement.style.color = this.corNegativa();
            }
            

            //elemento.nativeElement.style.color = "green";
        });
        
    }
}