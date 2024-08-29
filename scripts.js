const perguntas = [
    {
        enunciado: "Qual curso vocẽ quer?",
        alternativas: [
            { texto: "Farmácia", pontuacao: 1 },
            { texto: "Engenharia", pontuacao: 2 }
        ]
    },
    {
        enunciado: " Em qual instituição?",
        alternativas: [
            { texto: "UFPR", pontuacao: 2 },
            { texto: "PUCPR", pontuacao: 1 }
        ]
    },
    {
        enunciado: "Você está estudando?",
        alternativas: [
            { texto: "Sim", pontuacao: 2 },
            { texto: "Não", pontuacao: 1 }
        ]
    },
    {
        enunciado: "Qual suas opções de pós graduação? ",
        alternativas: [
            { texto: "Não quero me especializar", pontuacao: 1 },
            { texto: "Fazer algo relacionado com a área que quero seguir", pontuacao: 2 }
        ]
    },
    {
        enunciado: "Como você vai ingressar na faculdade?",
        alternativas: [
            { texto: "Com a nota do ENEM", pontuacao: 1 },
            { texto: "Fazendo o vestibular da instituição que eu desejo", pontuacao: 2 }
        ]
    }
];

let atual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa) => {
        const button = document.createElement('button');
        button.textContent = alternativa.texto;
        button.addEventListener('click', () => {
            pontuacao += alternativa.pontuacao; // Incrementa a pontuação com base na alternativa selecionada
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                exibePontuacaoFinal(); // Chama função para exibir a pontuação final
            }
        });
        alternativasContainer.appendChild(button);
    });
}

function exibePontuacaoFinal() {
    caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação final é: ${pontuacao}`;
    alternativasContainer.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta(); // Inicia o questionário mostrando a primeira pergunta


