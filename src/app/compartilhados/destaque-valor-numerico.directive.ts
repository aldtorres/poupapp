import { Directive } from "@angular/core";

//somente para atributos personalizados
//DECORATOR
@Directive({
    selector: '[appDestaqueValorNumericoDirective]' 
})
export class DestaqueValorNumericoDirective {
    constructor(){
        console.log('DestaqueValorNumericoDirective APLICADO!')
    }
}