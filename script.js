function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitoria++;
    calculaPontos(jogador);
    exibeJogadores(jogadores);
};

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empate++;
    calculaPontos(jogador);
    exibeJogadores(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrota++;
    exibeJogadores(jogadores);
}

function adicionarJogador() {
    var nome = document.getElementById("adicionarJogador").value;
    jogadores.push({
        nome: nome,
        vitoria: 0,
        empate: 0,
        derrota: 0,
        pontos: 0
    });
    document.getElementById("adicionarJogador").value = "";
    exibeJogadores(jogadores);
}

var rafa = {
    nome: "Rafa",
    vitoria: 2,
    empate: 1,
    derrota: 2,
    pontos: 0
};
var paulo = {
    nome: "Paulo",
    vitoria: 3,
    empate: 0,
    derrota: 2,
    pontos: 0
};
var pedro = {
    nome: "Pedro",
    vitoria: 0,
    empate: 5,
    derrota: 0,
    pontos: 0
};

var jogadores = [rafa, paulo, pedro];

calculaPontos(rafa);
calculaPontos(paulo);
calculaPontos(pedro);

function calculaPontos(jogador) {
    jogador.pontos = (jogador.vitoria * 3) + (jogador.empate);
};

function exibeJogadores(jogadores) {
    var elemento = "";
    for (let i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>";
        elemento += "<td>" + jogadores[i].vitoria + "</td>";
        elemento += "<td>" + jogadores[i].empate +"</td>";
        elemento += "<td>" + jogadores[i].derrota + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elemento += "</tr>";    
    }

    document.getElementById("tabelaJogadores").innerHTML = elemento;
};

exibeJogadores(jogadores);