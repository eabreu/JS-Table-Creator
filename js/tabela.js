var botaoTabela = document.querySelector("#btnCriarTabela");




botaoTabela.addEventListener("click", function (event) {
    event.preventDefault();
    var numeroTabela = document.querySelector("#valorTabela");
    var numero = numeroTabela.value;
    var invalido = false;

    var tabelaDelete = document.querySelector(".tabelaPrincipal");
    if (tabelaDelete == null) {
        preparaTabela(numero, invalido, numeroTabela);
    } else {

        tabelaDelete.classList.add("readyForRemove");
        tabelaDelete.classList.add("anima-saida");
        tabelaDelete.addEventListener("transitionend", function () {
            if (tabelaDelete.classList.contains("readyForRemove")) {
                tabelaDelete.parentNode.removeChild(tabelaDelete);
            }
            preparaTabela(numero, invalido, numeroTabela);
        });
    }




});

function preparaTabela(numero, invalido, numeroTabela){
    if (numero == "") {
        console.log("Erro");
        numeroTabela.classList.add("invalido");
        numeroTabela.focus();
    } else {
        if (numero <= 0 || numero > 50) {
            alert("Digite um número positivo até 50");
            invalido = true;
            console.log("Negativo");
        }
        if (invalido == false) {
            console.log(numero);
            montaTabela(numero);
            numeroTabela.classList.remove("invalido");
        }
    }
}

function montaTabela(numero) {
    var tabela = document.createElement("table");
    var tabelaBody = document.createElement("tbody");

    for (var i = 0; i < numero; i++) {
        var linhaTabela = document.createElement("tr");

        for (var x = 0; x < numero; x++) {
            var celulaTabela = document.createElement("td");
            if (i == x || (x+1) == (numero-i)) {
                celulaTabela.textContent = "X";
                celulaTabela.classList.add("tdx");
            }

            linhaTabela.appendChild(celulaTabela);
        }

        tabelaBody.appendChild(linhaTabela);
    }
    tabela.appendChild(tabelaBody);
    var divTabela = document.querySelector(".containerTabela");
    divTabela.appendChild(tabela);
    tabela.classList.add("tabelaPrincipal");
    tabela.classList.add("centraliza-tabela");
    tabela.classList.add("entrada");
}




