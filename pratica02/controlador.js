const readline = require('readline-sync');

const Contato = require('./modelo');

const contato = [];


function listar(contato){
    contato.forEach(contato =>
        console.log(contato.toString())
        );
}

function Adicionar(){
   const novo= new contato(nome,email, telefone);
    contato.push(novo);
}

function buscar(nome){
    const buscou = contato.find(contato=> contato.nome === nome);
    if(buscou){
        console.log(buscou.toString());

    }else{
        console.log("Contato não localizado");
    }
}

function atualizar(nome, email){
    const buscou = contato.find(contato=> contato.nome === nome);
    if(buscou){
      
       buscou.email = email;

    }if (buscou) {
        buscou.telefone = telefone;
        
    }
    else{
        console.log("contato não localizado");
    }
}

function remover(contato){
    const posicao =
      contato.findIndex(contato => contato.nome === nome);
    if (posicao>=0){
        contato.splice(posicao, 1);
    } else {
        console.log("contao não localizado");
    }
}

module.exports = {listar,Adicionar, buscar, atualizar, remover};
