import { Produtos } from "../model/Produtos";

export interface Repository{

    procurarPorID(numero: number): void;
    listarTodos(): void;
    cadastrarLivro(livro: Produtos):void;
    atualizar(livro: Produtos):void;
    deletar(numero: number):void;
    
}


