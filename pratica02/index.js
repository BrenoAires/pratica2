const readline = require('readline-sync');

const controlador= require('./controlador');

function menu(){
    console.log('1. Listar');
    console.log('2. Adicionar');
    console.log('3. Buscar');
    console.log('4. Atualizar');
    console.log('5. remover');
    console.log('6. sair');
}

function escolherOpcao(opcao) {
    switch(opcao) {

      case '1': 
      const contatos= controlador.listar(); 
      contatos.forEach()
      break;

      case '2': 
      const Contato= readline.question("Entre com o nome do contato:");
      const Email = readline.question("Entre com o email do contato:");
      const Telefone = readline.question("Entre com o telefone do contato:");
      const Adicionar= controlador.Adicionar(nome, email, telefone); 
      
      break;
      
      case '3':  
      const nome= readline.question("Entre com o nome do contato:");
      controlador.buscar(); break;
      
      case '4':  
      const contato= readline.question("Entre com o nome do contato:");
      const email = readline.question("Entre com o novo email:");
      const telefone = readline.question("Entre com o novo telefone:");
      controlador.atualizar(); break;
      
      case '5':  
      const Nome= readline.question("Entre com o nome do contato:");
      controlador.remover(); break;
      
      case '6': process.exit(0);
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