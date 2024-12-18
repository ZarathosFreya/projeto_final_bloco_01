import { Livro } from "./Livro";
import { Produtos } from "./Produtos";

export class LivroDigital extends Produtos {

    private _formato: number;
    private _tamanhoArquivo: string;


    constructor(id: number, nome: string, tipo: number, autor: string, anoPublicacao: number, formato: number,
        tamanhoArquivo: string){

        super(id, nome, tipo, autor,anoPublicacao);
        this._formato = formato;
        this._tamanhoArquivo = tamanhoArquivo;

    }

	public get formato(): number {
		return this._formato;
	}

	public get tamanhoArquivo(): string {
		return this._tamanhoArquivo;
	}

	public set formato(value: number) {
		this._formato = value;
	}

	public set tamanhoArquivo(value: string) {
		this._tamanhoArquivo = value;
	}

    public visualizar(): void {
        let formato: string 
        switch(this.formato){
            case 1:
                formato = "Formato PDF"
            break;
            case 2:
                formato = "Formato EPUB"
            break;
            case 3:
                formato = "Formato MOBI"
            break;
            default:
                console.log("Formato não disponível!")
            break;

        }
        super.visualizar();
        console.log("Tipo de Formato: " + this._formato);
        console.log("Tamanho de Arquivo: " + this._tamanhoArquivo);
        
    }
    
}