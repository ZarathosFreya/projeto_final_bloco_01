import { Produtos } from "./Produtos";

export class Livro extends Produtos{

    private _preco: number;
    
	constructor(id: number, nome: string, tipo: number, autor: string, anoPublicacao: number, preco: number) {
		
        super(id, nome, tipo, autor,anoPublicacao);
        this._preco = preco;
        
	}

	public get preco(): number {
		return this._preco;
	}

	public set preco(value: number) {
		this._preco = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Preço: R$ ${this._preco}`)
    }

}	