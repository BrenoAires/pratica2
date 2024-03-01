const readline = require('readline-sync');

const controlador= require('./controlador');

function menu(){
    console.log('1. Listar');
    console.log('2.Buscar');
    console.log('3. Atualizar');
    console.log('4. remover');
    console.log('5. sair');
}

function escolherOpcao(opcao) {
    switch(opcao) {

      case '1': 
      const contatos= controlador.listar(); 
      contatos.forEach()
      break;
      
      case '2':  
      const nome= readline.question("Entre com o nome do contato:");
      controlador.buscar(); break;
      
      case '3':  
      const contato= readline.question("Entre com o nome do contato:");
      const email = readline.question("Entre com o novo email:");
      const telefone = readline.question("Entre com o novo telefone:");
      controlador.atualizar(); break;
      
      case '4':  
      const Nome= readline.question("Entre com o nome do contato:");
      controlador.remover(); break;
      
      case '5': process.exit(0);
      default: console.log("Opcao invalida");  
    }
    readline.question("Pressione ENTER para continuar...");
}

function main() {
    while(true) {
      menu();
      const opcao = readline.question("Entre com uma opcao: ");
      escolherOpcao(opcao);
   }
  }
  
  main();