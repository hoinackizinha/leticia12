const perguntas = [
{
enunciado: "Qual sua cor favorita?",
alternativas: [
"Azul",
"Rosa"
]
},
{
enunciado: "Qual filme você prefere?",
alternativas: [
"Sherek",
"Toy Story"
]
},
{
enunciado: "Qual período do dia você mais gosta?",
alternativas: [
"Manhã",
"Tarde",
"Noite"
]
},
{
enunciado: "Bebida favorita?",
alternativas: [
"Ccafé",
"Refrigerante"
]

},
{
enunciado: "Qual viagem você gosta?",
alternativas: [
"Praia",
"Natureza"
]
}
];
let atual = 0;
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');
function mostraPergunta() {
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
alternativasContainer.innerHTML = '';
perguntaAtual.alternativas.forEach((alternativa, index) => {
const button = document.createElement('button');
button.textContent = alternativa;
button.addEventListener('click', () => {
atual++;
if (atual < perguntas.length) {
mostraPergunta();
} else {
caixaPerguntas.textContent = 'Você completou o questionário!';
alternativasContainer.innerHTML = '';
}
});
alternativasContainer.appendChild(button);
});
}
mostraPergunta();
