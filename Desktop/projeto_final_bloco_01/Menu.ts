import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Livro } from "./src/model/Livro";
import { LivroDigital } from "./src/model/LivroDigital";
import { LivroController } from "./src/controller/LivroController";


export function main() {

    const livroc = new LivroController();

    let opcao, id, anoPublicacao, preco, numero, tipo, formato: number;
    let autor, tamanhoArquivo: string;
    let nome: string;

    const tipoLivros = ['Livro', 'LivroDigital']
    const tipoFormato = ['PDF', 'EPUB', 'MOBI']

    // Teste de dados livro fisico (objeto)
    livroc.cadastrarLivro(new Livro(livroc.gerarNumero(), "Orgulho e Preconceito", 1 , "Jane Austen", 1813, 25))
    livroc.cadastrarLivro(new Livro(livroc.gerarNumero(),"1984",1 , "George Orwell", 1949, 10.00))
    // Teste de dados livro digital (objeto)
    livroc.cadastrarLivro(new LivroDigital(livroc.gerarNumero(), "Orgulho e Preconceito", 2 , "Jane Austen", 1845, 2, "2 MB"))
    livroc.cadastrarLivro(new LivroDigital(livroc.gerarNumero(),"1984",2 , "George Orwell", 1949, 1, "1.87 MB"))



    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                LIVRARIA CYNTESSA                    ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Adicionar Livro                      ");
        console.log("            2 - Listar todos os Livros               ");
        console.log("            3 - Buscar Livro por ID                  ");
        console.log("            4 - Atualizar Dados do Livro             ");
        console.log("            5 - Apagar Livro                         ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log("\nLivraria Cyntessa. Preços que cabem no seu bolso!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nAdicionar Livro\n\n");

                console.log("Digite o Nome do Livro: ")
                nome = readlinesync.question('');

                console.log("Digite o Nome do Autor do Livro: ")
                autor = readlinesync.question('');

                console.log("Digite o Ano da Publicação do Livro: ")
                anoPublicacao = readlinesync.questionInt('');

                console.log("Selecione o Formato desejado: ")
                tipo = readlinesync.keyInSelect(tipoLivros, " ", {cancel: false}) + 1;

                switch(tipo){
                    case 1:
                        console.log("Digite o preço: ");
                        preco = readlinesync.questionFloat("");
                        livroc.cadastrarLivro(new Livro(livroc.gerarNumero(),nome, tipo, autor, anoPublicacao, preco))
                        break;
                    case 2:
                        console.log("Digite o formato e o tamanho do arquivo: ");
                        formato = readlinesync.keyInSelect(tipoFormato, " ", {cancel: false}) + 1;
                        tamanhoArquivo = readlinesync.question("");
                        livroc.cadastrarLivro(new LivroDigital(livroc.gerarNumero(), nome, tipo, autor, anoPublicacao, formato, tamanhoArquivo))
                        break;
                        
                }
                keyPress()
                break;
            case 2:
                console.log("\n\nListar todos os Livros\n\n");

                livroc.listarTodos();

                keyPress()

                break;
            case 3:
                console.log("\n\nConsultar dados do Livro - por ID\n\n");

                console.log("Digite o ID do Livro: ")
                numero = readlinesync.questionInt("");
                livroc.procurarPorID(numero);

                keyPress()

                break;
            case 4:
                console.log("\n\nAtualizar dados do Livro\n\n");

                    console.log("Digite o ID do Livro: ");
                    id = readlinesync.questionInt('');

                    let livroAtualizar = livroc.buscarNoArray(id);

                    if(livroAtualizar !== null){

                    console.log("Digite o nome Livro: ");
                    nome = readlinesync.question('');

                    console.log("Digite o nome do Autor do Livro: ");
                    autor = readlinesync.question('');

                    console.log("Digite o ano de Publicação do Livro: ");
                    anoPublicacao = readlinesync.questionInt('');

                    tipo = livroAtualizar.tipo

                    switch(tipo){
                        case 1:
                            console.log("Digite o preço do Livro Fisico: ");
                            preco = readlinesync.questionFloat('');
                            livroc.atualizar(new Livro(id, nome, tipo, autor, anoPublicacao, preco))
                        break;
                        case 2:
                            console.log("Digite o formato e tamanho do arquivo do Livro Digital: ");
                            formato = readlinesync.keyInSelect(tipoFormato, " ", {cancel: false}) + 1;
                            tamanhoArquivo = readlinesync.question("");
                            livroc.atualizar(new LivroDigital(id, nome, tipo, autor, anoPublicacao, formato, tamanhoArquivo))
                        break;
                    }
                    }else{
                        console.log("Livro não encontrado!");
                    }
            
                keyPress()

                break;
            case 5:
                console.log("\n\nApagar um Livro\n\n");

                console.log("Digite o ID do Livro: ")
                numero = readlinesync.questionInt("");
                livroc.deletar(numero);
                
                keyPress()
                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        
        }
    }

}


export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Andressa Neves Morais de Souza");
    console.log("Generation Brasil - andressas@genstudents.org");
    console.log("github.com/ZarathosFreya/");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();