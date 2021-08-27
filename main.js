const entrada = require('prompt-sync')();

var rodadas = parseInt(entrada('Quantas rodadas quer jogar: '));
console.log('Você escolheu: ' + rodadas, 'rodadas')


var escolhaDoUsuario = entrada("Pronto para jogar pedra, papel ou tesoura? \nEscolha 1 = pedra, 2 = papel, 3 = tesoura: ");

let resposta = ['pedra, papel, tesoura'];
var random = Math.floor(Math.random() * resposta);
var escolhas = resposta[random]

let escolhaDoComputador = Math.round(Math.random() * 3) + 1;

if(escolhaDoUsuario === 1 && escolhaDoComputador === 3) {
    console.log(`Usuario ganhou ${resposta[0]}`);
} else if( escolhaDoUsuario === 1 && escolhaDoComputador === 2) {
    console.log(`Usuario perdeu ${resposta[1]}`);
} else if( escolhaDoUsuario === 1 && escolhaDoComputador === 1) {
    console.log(`Empate`);
}


if(escolhaDoUsuario === 2 && escolhaDoComputador === 1) {
    console.log('Usuario ganhou');
} else if( escolhaDoUsuario === 2 && escolhaDoComputador === 3) {
    console.log('Usuario perdeu');
} else if( escolhaDoUsuario === 2 && escolhaDoComputador === 2) {
    console.log('Empate');
}


if(escolhaDoUsuario === 3 && escolhaDoComputador === 2) {
    console.log('Usuario ganhou');
} else if( escolhaDoUsuario === 3 && escolhaDoComputador === 1) {
    console.log('Usuario perdeu');
} else if( escolhaDoUsuario === 3 && escolhaDoComputador === 3) {
    console.log('Empate');
}

