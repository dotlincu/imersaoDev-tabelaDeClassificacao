adicionarVitoria() {
    
}

adicionarEmpate() {

}

adicionarDerrota() {

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

calculaPontos(rafa);
calculaPontos(paulo);
calculaPontos(pedro);

function calculaPontos(jogador) {
    jogador.pontos = (jogador.vitoria * 3) + (jogador.empate);
};

var jogadores = [rafa, paulo, pedro];

function exibeJogadores(jogadores) {
    var elemento = "";
    for (let i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>";
        elemento += "<td>" + jogadores[i].vitoria + "</td>";
        elemento += "<td>" + jogadores[i].empate +"</td>";
        elemento += "<td>" + jogadores[i].derrota + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria()'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate()'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota()'>Derrota</button></td>";
        elemento += "</tr>";    
    }

    document.getElementById("tabelaJogadores").innerHTML = elemento;
}

exibeJogadores(jogadores);