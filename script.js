// ==========================================
// BANCO DE QUESTÕES
// ==========================================

const bancoQuestoes = [

    // QUÍMICA

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
        disciplina: "Química",
        pergunta: "Qual destas substâncias é um ácido?",
        opcoes: ["NaOH", "HCl", "NaCl", "CaO"],
        resposta: "HCl"
    },


    // BIOLOGIA

    {
        disciplina: "Biologia",
        pergunta: "Qual é a unidade básica dos seres vivos?",
        opcoes: ["Átomo", "Célula", "Tecido", "Órgão"],
        resposta: "Célula"
    },

    {
        disciplina: "Biologia",
        pergunta: "Qual organelo é responsável pela produção de energia celular?",
        opcoes: [
            "Ribossoma",
            "Núcleo",
            "Mitocôndria",
            "Lisossoma"
        ],
        resposta: "Mitocôndria"
    },

    {
        disciplina: "Biologia",
        pergunta: "Qual molécula contém a informação genética?",
        opcoes: [
            "ATP",
            "DNA",
            "Glicose",
            "Água"
        ],
        resposta: "DNA"
    },


    // MATEMÁTICA

    {
        disciplina: "Matemática",
        pergunta: "Quanto é 8 × 7?",
        opcoes: ["48", "54", "56", "64"],
        resposta: "56"
    },

    {
        disciplina: "Matemática",
        pergunta: "Quanto é 15 + 27?",
        opcoes: ["32", "40", "42", "45"],
        resposta: "42"
    },

    {
        disciplina: "Matemática",
        pergunta: "Qual é a raiz quadrada de 81?",
        opcoes: ["7", "8", "9", "10"],
        resposta: "9"
    },


    // FÍSICA

    {
        disciplina: "Física",
        pergunta: "Qual é a unidade SI da força?",
        opcoes: [
            "Joule",
            "Watt",
            "Newton",
            "Pascal"
        ],
        resposta: "Newton"
    },

    {
        disciplina: "Física",
        pergunta: "Qual é a velocidade da luz no vácuo aproximadamente?",
        opcoes: [
            "3 × 10⁸ m/s",
            "3 × 10⁵ m/s",
            "3 × 10³ m/s",
            "3 × 10¹⁰ m/s"
        ],
        resposta: "3 × 10⁸ m/s"
    },

    {
        disciplina: "Física",
        pergunta: "Qual é a unidade de energia no SI?",
        opcoes: [
            "Newton",
            "Joule",
            "Watt",
            "Volt"
        ],
        resposta: "Joule"
    }

];


// ==========================================
// VARIÁVEIS
// ==========================================

let disciplinaAtual = "";

let perguntasAtuais = [];

let indiceQuestao = 0;

let pontuacao = 0;

let respostaSelecionada = null;

let tempo = 300;

let intervaloCronometro;


// ==========================================
// DISCIPLINA
// ==========================================

function abrirDisciplina(disciplina) {

    disciplinaAtual = disciplina;

    document.getElementById("area-disciplina")
        .classList.remove("area-escondida");

    document.getElementById("disciplinas")
        .style.display = "none";

    document.getElementById("nome-disciplina")
        .textContent = disciplina;

    const icones = {
        "Química": "🧪",
        "Biologia": "🧬",
        "Matemática": "📐",
        "Física": "⚡"
    };

    document.getElementById(
        "icone-disciplina-grande"
    ).textContent = icones[disciplina];

    document.getElementById("conteudo-disciplina")
        .innerHTML = `
            <h3>Bem-vindo à ${disciplina}!</h3>

            <p>
                Escolha um nível acima para começar
                os teus estudos.
            </p>
        `;

    document.getElementById("area-disciplina")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ==========================================
// NÍVEL
// ==========================================

function selecionarNivel(nivel) {

    document.getElementById("conteudo-disciplina")
        .innerHTML = `

        <h3>
            ${disciplinaAtual} — Nível ${nivel}
        </h3>

        <div class="conteudo-opcoes">

            <p>
                📖 Conteúdos teóricos
            </p>

            <p>
                📝 Exercícios
            </p>

            <p>
                🎯 Simulados
            </p>

            <button
                onclick="iniciarSimulado('${disciplinaAtual}')">

                Começar exercícios

            </button>

        </div>

    `;
}


// ==========================================
// VOLTAR PARA DISCIPLINAS
// ==========================================

function voltarParaDisciplinas() {

    document.getElementById("area-disciplina")
        .classList.add("area-escondida");

    document.getElementById("disciplinas")
        .style.display = "block";

    document.getElementById("disciplinas")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ==========================================
// IR PARA DISCIPLINAS
// ==========================================

function irParaDisciplinas() {

    document.getElementById("disciplinas")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ==========================================
// INICIAR SIMULADO
// ==========================================

function iniciarSimulado(disciplina) {

    disciplinaAtual = disciplina;

    perguntasAtuais =
        bancoQuestoes.filter(
            q => q.disciplina === disciplina
        );

    if (perguntasAtuais.length === 0) {

        alert(
            "Ainda não existem questões suficientes para esta disciplina."
        );

        return;
    }

    indiceQuestao = 0;

    pontuacao = 0;

    respostaSelecionada = null;

    tempo = 300;

    document.getElementById("area-disciplina")
        .classList.add("area-escondida");

    document.getElementById("simulados")
        .style.display = "none";

    document.getElementById("resultado")
        .classList.add("area-escondida");

    document.getElementById("area-simulado")
        .classList.remove("area-escondida");

    document.getElementById("area-simulado")
        .scrollIntoView({
            behavior: "smooth"
        });

    document.getElementById("botao-proxima")
        .style.display = "block";

    mostrarQuestao();

    iniciarCronometro();
}


// ==========================================
// SIMULADO GERAL
// ==========================================

function abrirSimuladoGeral() {

    perguntasAtuais = [...bancoQuestoes];

    disciplinaAtual = "Simulado Geral";

    indiceQuestao = 0;

    pontuacao = 0;

    respostaSelecionada = null;

    tempo = 300;

    document.getElementById("simulados")
        .style.display = "none";

    document.getElementById("area-simulado")
        .classList.remove("area-escondida");

    document.getElementById("area-simulado")
        .scrollIntoView({
            behavior: "smooth"
        });

    mostrarQuestao();

    iniciarCronometro();
}


// ==========================================
// MOSTRAR QUESTÃO
// ==========================================

function mostrarQuestao() {

    const pergunta =
        perguntasAtuais[indiceQuestao];

    document.getElementById("numero-questao")
        .textContent =
        "Questão " +
        (indiceQuestao + 1) +
        " de " +
        perguntasAtuais.length;

    document.getElementById("texto-questao")
        .textContent =
        pergunta.pergunta;

    const opcoes =
        document.getElementById("opcoes");

    opcoes.innerHTML = "";

    respostaSelecionada = null;

    pergunta.opcoes.forEach(opcao => {

        const elemento =
            document.createElement("div");

        elemento.classList.add("opcao");

        elemento.textContent = opcao;

        elemento.onclick = function() {

            document
                .querySelectorAll(".opcao")
                .forEach(item => {

                    item.classList.remove(
                        "selecionada"
                    );

                });

            elemento.classList.add(
                "selecionada"
            );

            respostaSelecionada = opcao;

        };

        opcoes.appendChild(elemento);

    });

    const progresso =
        ((indiceQuestao) /
        perguntasAtuais.length) * 100;

    document.getElementById(
        "barra-progresso"
    ).style.width =
        progresso + "%";
}


// ==========================================
// PRÓXIMA QUESTÃO
// ==========================================

function proximaQuestao() {

    if (respostaSelecionada === null) {

        alert(
            "Escolhe uma resposta primeiro."
        );

        return;
    }

    const pergunta =
        perguntasAtuais[indiceQuestao];

    if (
        respostaSelecionada ===
        pergunta.resposta
    ) {

        pontuacao++;

    }

    indiceQuestao++;

    if (
        indiceQuestao <
        perguntasAtuais.length
    ) {

        mostrarQuestao();

    } else {

        terminarSimulado();

    }
}


// ==========================================
// TERMINAR SIMULADO
// ==========================================

function terminarSimulado() {

    clearInterval(intervaloCronometro);

    const total =
        perguntasAtuais.length;

    const percentagem =
        Math.round(
            (pontuacao / total) * 100
        );

    document.getElementById(
        "area-simulado"
    ).classList.add(
        "area-escondida"
    );

    document.getElementById(
        "resultado"
    ).classList.remove(
        "area-escondida"
    );

    document.getElementById(
        "texto-resultado"
    ).textContent =
        "Acertaste " +
        pontuacao +
        " de " +
        total +
        " questões.";

    document.getElementById(
        "percentagem"
    ).textContent =
        percentagem + "%";

    guardarDesempenho(
        total,
        percentagem
    );

    document.getElementById(
        "resultado"
    ).scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================
// CRONÓMETRO
// ==========================================

function iniciarCronometro() {

    clearInterval(intervaloCronometro);

    intervaloCronometro =
        setInterval(() => {

            tempo--;

            const minutos =
                Math.floor(tempo / 60);

            const segundos =
                tempo % 60;

            document.getElementById(
                "cronometro"
            ).textContent =
                String(minutos).padStart(2, "0")
                + ":" +
                String(segundos).padStart(2, "0");

            if (tempo <= 0) {

                terminarSimulado();

            }

        }, 1000);
}


// ==========================================
// FECHAR SIMULADO
// ==========================================

function fecharSimulado() {

    clearInterval(intervaloCronometro);

    document.getElementById(
        "area-simulado"
    ).classList.add(
        "area-escondida"
    );

    document.getElementById(
        "simulados"
    ).style.display = "block";

    document.getElementById(
        "simulados"
    ).scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================
// DESEMPENHO
// ==========================================

function guardarDesempenho(
    total,
    percentagem
) {

    let dados =
        JSON.parse(
            localStorage.getItem(
                "desempenhoEstuda"
            )
        ) || {

            simulados: 0,

            melhor: 0,

            questoes: 0

        };


    dados.simulados++;

    dados.questoes += total;

    if (
        percentagem >
        dados.melhor
    ) {

        dados.melhor =
            percentagem;

    }


    localStorage.setItem(
        "desempenhoEstuda",
        JSON.stringify(dados)
    );


    atualizarDesempenho();
}


// ==========================================
// ATUALIZAR DESEMPENHO
// ==========================================

function atualizarDesempenho() {

    const dados =
        JSON.parse(
            localStorage.getItem(
                "desempenhoEstuda"
            )
        ) || {

            simulados: 0,

            melhor: 0,

            questoes: 0

        };


    document.getElementById(
        "simulados-realizados"
    ).textContent =
        dados.simulados;


    document.getElementById(
        "melhor-percentagem"
    ).textContent =
        dados.melhor + "%";


    document.getElementById(
        "questoes-respondidas"
    ).textContent =
        dados.questoes;
}


// ==========================================
// VOLTAR AO INÍCIO
// ==========================================

function voltarInicio() {

    document.getElementById(
        "resultado"
    ).classList.add(
        "area-escondida"
    );

    document.getElementById(
        "simulados"
    ).style.display = "block";

    document.getElementById(
        "inicio"
    ).scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================
// INICIAR DESEMPENHO
// ==========================================

atualizarDesempenho();
