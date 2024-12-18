import { Livro } from "./Livro";
import { Produtos } from "./Produtos";

export class LivroDigital extends Produtos {

    private _formato: number;
    private _tamanhoArquivo: string;
    private _assinatura: number;

    constructor(id: number, nome: string, tipo: number, autor: string, anoPublicacao: number, formato: number,
        tamanhoArquivo: string){

        super(id, nome, tipo, autor,anoPublicacao);
        this._formato = formato;
        this._tamanhoArquivo = tamanhoArquivo;
        this._assinatura = this.assinatura;
    }

	public get formato(): number {
		return this._formato;
	}

	public get tamanhoArquivo(): string {
		return this._tamanhoArquivo;
	}

    public get assinatura(): number {
        return this._assinatura;
    }

	public set formato(value: number) {
		this._formato = value;
	}

	public set tamanhoArquivo(value: string) {
		this._tamanhoArquivo = value;
	}

    public set assinatura(value: number){
        this._assinatura = value;
    }

    public visualizarformato(): void {
        let formato: string = " "
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

        }
    }
    
    public visualisarformato(): void {
        super.visualizar();
        console.log("Tipo de Formato: " + this.formato);
    }

}