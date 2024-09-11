let listaDeNumerosSorteados= [];
let valorLimite = 10;
let numeroaleatorio = gerarNumAleatorio();
console.log(numeroaleatorio);
let tentativas = 1;
exibirMensageminicial(); 
function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;   
}
function verificarChute() {
    let chute = parseInt(document.querySelector('input').value, 10); // Convertendo chute para número
    if (isNaN(chute)) {
        exibirTexto('p', 'Por favor, insira um número válido.');
        return; // Sai da função se o valor não for um número
    }
    if (chute === numeroaleatorio) {
        exibirTexto('h1', 'Acertou, caralha!');
        exibirTexto('p', `Você descobriu o número e levou ${tentativas} ${tentativas > 1 ? 'tentativas' : 'tentativa'}!`);
       document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroaleatorio) {
        exibirTexto('p', 'O número secreto é menor!');
        limparCampo();
    } else {
        exibirTexto('p', 'O número secreto é maior!');
        limparCampo();
    }
    tentativas++;
    
}
function gerarNumAleatorio() {
    let numeroescolhido = parseInt(Math.random()*valorLimite+1);
    let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;
        if (quantidadeDeElementosDaLista === valorLimite){
            listaDeNumerosSorteados = [];
        }
    if (listaDeNumerosSorteados.includes(numeroescolhido)) 
        {
        return gerarNumAleatorio();
        }else {
            listaDeNumerosSorteados.push(numeroescolhido);
            console.log(listaDeNumerosSorteados);
            return numeroescolhido;
        }
    }
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroaleatorio = gerarNumAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensageminicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
function exibirMensageminicial(){
    exibirTexto('h1','Jogo do Número Secreto');
    exibirTexto('p','Escolha um número entre 1 e 10');
}