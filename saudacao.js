function saudacao(nomeJogador) {
    console.log("Bem vindo ao Jogo," + nomeJogador + "!")
}

saudacao(" wellington de oliva");

function subirDeNivel(nivelAtual) {
    return nivelAtual +1;
}

let meuNivel = 66;

let nivelAtualizado = subirDeNivel(meuNivel);

console.log('Seu novo nivel: ' + nivelAtualizado)