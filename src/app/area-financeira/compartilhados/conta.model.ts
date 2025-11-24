export class Conta {
  constructor(
    public readonly nome: string,
    public readonly saldo: number,
  ) {}
}


export enum TipoTransacao {
  DEPOSITO = 'Depósito',
  SAQUE = 'Saque'
}