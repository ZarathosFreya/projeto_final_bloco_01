import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

export function main() {

    let opcao

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
                
                break;
            keyPress()
            case 2:
                console.log("\n\nListar todos os Livros\n\n");

                break;
            case 3:
                console.log("\n\nConsultar dados do Livro - por ID\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados do Livro\n\n");

                break;
            case 5:
                console.log("\n\nApagar um Livro\n\n");

                break;
            case 6:
                console.log("\n\nSaque\n\n");

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