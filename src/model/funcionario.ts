export class Funcionario {
    matricula: number;
    senha: string;

    constructor(matricula?: number, senha?: string) {
        this.matricula = matricula;
        this.senha = senha;
    }
}