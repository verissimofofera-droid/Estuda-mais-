// ===============================
// BANCO INICIAL DE QUESTÕES
// ===============================

const perguntas = [

    {
        disciplina: "Química",
        pergunta: "Qual é o símbolo químico do oxigénio?",
        opcoes: ["O", "Ox", "Og", "C"],
        resposta: "O"
    },

    {
        disciplina: "Química",
        pergunta: "Qual é o número atómico do hidrogénio?",
        opcoes: ["1", "2", "8", "10"],
        resposta: "1"
    },

    {
        disciplina: "Biologia",
        pergunta: "Qual é a unidade básica dos seres vivos?",
        opcoes: ["Átomo", "Célula", "Tecido", "Órgão"],
        resposta: "Célula"
    },

    {
        disciplina: "Matemática",
        pergunta: "Quanto é 8 × 7?",
        opcoes: ["48", "54", "56", "64"],
        resposta: "56"
    },

    {
        disciplina: "Física",
        pergunta: "Qual é a unidade SI da força?",
        opcoes: ["Joule", "Watt", "Newton", "Pascal"],
        resposta: "Newton"
    }

];


// ===============================
// VARIÁVEIS DO SIMULADO
// ===============================

let perguntasAtuais = [];
let indice = 0;
let pontuacao = 0;
let respostaSelecionada = null;


// ===============================
// SELECIONAR DISCIPLINA
// ===============================

function selecionarDisciplina(disciplina) {

    perguntasAtuais = perguntas.filter(
        pergunta => pergunta.disciplina === disciplina
    );

    if (perguntasAtuais.length === 0) {
        alert("Ainda não existem questões para esta disciplina.");
        return;
    }

    iniciarSimulado(disciplina);
}


// ===============================
// INICIAR SIMULADO
// ===============================

function mostrarSimulado() {

    // Por enquanto começa com todas as disciplinas
    perguntasAtuais = [...perguntas];

    iniciarSimulado("Simulado Geral");
}


function iniciarSimulado(nome) {

    indice = 0;
    pontuacao = 0;
    respostaSelecionada = null;

    document.getElementById("area-simulado")
        .classList.remove("escondido");

    document.getElementById("tituloSimulado")
        .textContent = nome;

    document.getElementById("resultado")
        .textContent = "";

    document.getElementById("area-simulado")
        .scrollIntoView({
            behavior: "smooth"
        });

    mostrarQuestao();
}


// ===============================
// MOSTRAR QUESTÃO
// ===============================

function mostrarQuestao() {

    const perguntaAtual = perguntasAtuais[indice];

    document.getElementById("questao").textContent =
        (indice + 1) + ". " + perguntaAtual.pergunta;

    const opcoes = document.getElementById("opcoes");

    opcoes.innerHTML = "";

    respostaSelecionada = null;

    perguntaAtual.opcoes.forEach(opcao => {

        const elemento = document.createElement("div");

        elemento.classList.add("opcao");

        elemento.textContent = opcao;

        elemento.onclick = function() {

            document.querySelectorAll(".opcao")
                .forEach(item => {
                    item.classList.remove("selecionada");
                });

            elemento.classList.add("selecionada");

            respostaSelecionada = opcao;
        };

        opcoes.appendChild(elemento);

    });
}


// ===============================
// PRÓXIMA QUESTÃO
// ===============================

function proximaQuestao() {

    if (respostaSelecionada === null) {

        alert("Escolha uma resposta primeiro.");

        return;
    }

    const perguntaAtual = perguntasAtuais[indice];

    if (respostaSelecionada === perguntaAtual.resposta) {
        pontuacao++;
    }

    indice++;

    if (indice < perguntasAtuais.length) {

        mostrarQuestao();

    } else {

        mostrarResultado();

    }
}


// ===============================
// RESULTADO
// ===============================

function mostrarResultado() {

    const total = perguntasAtuais.length;

    const percentagem = Math.round(
        (pontuacao / total) * 100
    );

    document.getElementById("questao")
        .textContent = "Simulado terminado!";

    document.getElementById("opcoes")
        .innerHTML = "";

    document.getElementById("proxima")
        .style.display = "none";

    document.getElementById("resultado")
        .textContent =
        "Resultado: " +
        pontuacao +
        "/" +
        total +
        " (" +
        percentagem +
        "%)";

}
