export abstract class Produtos{

    private _id: number;
    private _nome: string;
    private _tipo: number;
    private _autor: string;
    private _anoPublicacao: number;

	constructor(id: number, nome: string, tipo: number, autor: string, anoPublicacao: number) {
		this._id = id;
		this._nome = nome;
		this._tipo = tipo;
		this._autor = autor;
		this._anoPublicacao = anoPublicacao;
	}

	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get autor(): string {
		return this._autor;
	}

	public get anoPublicacao(): number {
		return this._anoPublicacao;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set autor(value: string) {
		this._autor = value;
	}

	public set anoPublicacao(value: number) {
		this._anoPublicacao = value;
	}

    public visualizar() {

        let tipo: string = " "
        switch (this._tipo){
            case 1:
                tipo = "Romance";
                break;
            case 2:
                tipo = "Terror";
                break;
            case 3:
                tipo = "Ficção Científica";
                break;
            default:
                console.log("Categoria não encontrada");
        }
    
        console.log("\n\n*****************************************************");
        console.log("Dados do Livro:");
        console.log("*****************************************************");
        console.log("ID do Livro: " + this._id);
        console.log("Nome do Livro: " + this._nome);
        console.log("Genero: " + tipo);
        console.log("Autor: " + this.autor);
        console.log("Ano de Publicacão: " + this._anoPublicacao);
        
    }
}