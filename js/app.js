
function comprar() {
    let quantidade = parseInt(document.getElementById('qtd').value);
    let ingressos = document.getElementById('tipo-ingresso').value;

    if (ingressos == 'pista') {
        comprarPista(quantidade);
    } else if (ingressos == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
}

function comprarPista(quantidade) {

    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if(quantidade > qtdPista) {
        alert('quantidade indisponível para tipo de pista!');
    } else {
        qtdPista = qtdPista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('compra realizado com sucesso!')
    }
}

function comprarSuperior(quantidade) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if(quantidade > qtdSuperior) {
        alert('quantidade indisponível para tido de pista!');
    } else {
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('compra realizado com sucesso!')
    }
}

function comprarInferior(quantidade) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(quantidade > qtdInferior) {
        alert('quantidade indisponível para tido de pista!');
    } else {
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('compra realizado com sucesso!')
    }
}