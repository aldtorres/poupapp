import { afterRender, Directive, ElementRef, input } from "@angular/core";

//somente para atributos personalizados
//DECORATOR
@Directive({
    selector: '[appDestaqueValorNumericoDirective]' 
})
export class DestaqueValorNumericoDirective {

    appDestaqueValorNumericoDirective = input.required<number>();

    //ElementRef ref do elemento do DOm = > iNJE.dep
    constructor(elemento : ElementRef<HTMLElement>){
        console.log('DIRETIVA --> DestaqueValorNumericoDirective APLICADO!')
        console.log(elemento)

        afterRender(() =>{
            console.log('appDestaqueValorNumericoDirective: ' + this.appDestaqueValorNumericoDirective());
            //sempre dentro do afterRender, alterar apenas após renderizar!
            
            if(this.appDestaqueValorNumericoDirective() > 0){
                elemento.nativeElement.style.color = "var(--destaque-receita)";
            }else if(this.appDestaqueValorNumericoDirective() < 0){
                elemento.nativeElement.style.color = "var(--destaque-despesa)";
            }
            

            //elemento.nativeElement.style.color = "green";
        });
        
    }
}