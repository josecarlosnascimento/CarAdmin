export class Categoria {
    id: number;
    descricao: string;
    valorDiaria: number;
    valorMulta: number;
}

export class Status{

    codigo: number;
    descricao: string;
}

export class Veiculo {
    codigo: number;
    marca: string;
    modelo: string;
    chassi: string;
    ano: number;
    cor: Cor;
    categoria: Categoria;
    tipo: Tipo;
    status: Status;
}

export class Cor {
    codigo: number;
    descricao: string;
}
export class Tipo {
    codigo: number;
    descricao: string;
}

export class Cliente {

    id: number;
    nome: String
    cpf: string
    email: string;
    dataNascimento: Date;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cep: string;
    cidade: String;

}

export class TipoDespesa{
    id: number;
    descricao: String
}

export class DespesaVeiculo{

    id: number;
    descricao: String
    data: Date;
    valor: number;
    tipo: TipoDespesa;

    veiculo: Veiculo;
}