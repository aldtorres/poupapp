import { nanoid } from "nanoid";

export class Transacao {
  public readonly id = nanoid();
  public readonly data: Date;

  constructor(
    public readonly nome: string,
    public readonly tipo: TipoTransacao,
    public readonly valor: number,
    dataTransacao: string,
    public readonly conta: string
  ) {
    if (!dataTransacao.includes('T') || !dataTransacao.includes(' ')){
      dataTransacao += "T00:00";
    }

    this.data = new Date(dataTransacao);
  }
}

export enum TipoTransacao {
  DEPOSITO = 'Depósito',
  SAQUE = 'Saque'
}
