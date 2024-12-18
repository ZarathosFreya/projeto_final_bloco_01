import { Repository } from "../repository/Repository";
import { Produtos } from "../model/Produtos";

export class LivroController implements Repository{

    private listaLivros: Array<Produtos> = new Array <Produtos>();
    numero: number = 0;

    procurarPorID(numero: number): void {
        let buscaID = this.buscarNoArray(numero);

        if(buscaID != null){
            buscaID.visualizar();
        }else
        console.log(`O ID ${numero} do Livro não foi encontrado! `);
    }
    listarTodos(): void {
        for (let livro of this.listaLivros)
            livro.visualizar();
    }
    cadastrarLivro(livro: Produtos): void {
        this.listaLivros.push(livro);
        console.log("Livro: " + livro.nome + "foi cadastrado com sucesso!");
    }
    atualizar(livro: Produtos): void {
        let buscaID = this.buscarNoArray(livro.id);

        if(buscaID != null){
            this.listaLivros[this.listaLivros.indexOf(buscaID)] = livro;
            console.log(`O ${livro} foi atualizado com sucesso!`)
        }else {
            console.log("Livro não encontrado!")
        }
    }
    deletar(numero: number): void {
        let buscaID = this.buscarNoArray(numero);

        if (buscaID != null){
            this.listaLivros.splice(this.listaLivros.indexOf(buscaID), 1);
            console.log (`O Livro com ID ${numero} foi apagado com sucesso!`);
        }else
        console.log(`O Livro com ID ${numero} não foi encontrado!`);
    }

    public gerarNumero(): number {
        return ++ this.numero;
    }

    public buscarNoArray(id: number): Produtos | null {
        for (let livro of this.listaLivros){
            if (livro.id === id)
                return livro;
        }

        return null;
    }
    
}