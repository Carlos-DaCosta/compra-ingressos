

function comprar() {
    let quantidade = parseInt(document.getElementById('qtd').value);
    let ingressos = document.getElementById('tipo-ingresso').value;

    if (ingressos == 'pista') {
        comprarPista(quantidade);
    }

    if (ingressos == 'superior') {
        comprarSuperior(quantidade);
    }

    if (ingressos == 'inferior') {
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
    let qtdinferior = parseInt(document.getElementById('qtd-superior').textContent);

    if(quantidade > qtdinferior) {
        alert('quantidade indisponível para tido de pista!');
    } else {
        qtdinferior = qtdinferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdinferior;
        alert('compra realizado com sucesso!')
    }
}