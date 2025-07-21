```javascript
// main.js

// Utilitário para navegar entre telas
function trocarTela(telaParaAtivar) {
  document.querySelectorAll(".screen").forEach((sec) => {
    sec.classList.add("hidden");
    sec.classList.remove("active");
  });
  telaParaAtivar.classList.remove("hidden");
  telaParaAtivar.classList.add("active");
}

// Elementos principais
const telaBoasVindas = document.getElementById("welcome-screen");
const telaCriacao = document.getElementById("character-creation");
const telaJogo = document.getElementById("game-screen");
const botaoComecar = document.getElementById("start-btn");
const formCriaChar = document.getElementById("char-form");

let jogador = {}; // objeto para armazenar dados do personagem

// Evento para começar o jogo (mostra criação de personagem)
botaoComecar.addEventListener("click", () => {
  trocarTela(telaCriacao);
});

// Evento para criar personagem
formCriaChar.addEventListener("submit", (e) => {
  e.preventDefault();

  // Captura dados do formulário
  const nome = formCriaChar["player-name"].value.trim();
  const genero = formCriaChar["gender"].value;
  const motivacao = formCriaChar["motivation"].value;
  const passado = formCriaChar["background"].value;

  if (!nome || !genero || !motivacao || !passado) {
    alert("Por favor, preencha todas as opções para continuar.");
    return;
  }

  // Armazena localmente para possível recuperação
  jogador = { nome, genero, motivacao, passado };
  localStorage.setItem("blockSoldiersJogador", JSON.stringify(jogador));

  iniciarJogo();
});

// Inicializa o jogo depois da criação do personagem
function iniciarJogo() {
  trocarTela(telaJogo);

  // Exemplo: mostrar dados do jogador no game-area
  const gameArea = document.getElementById("game-area");
  gameArea.innerHTML = `
    <h3>Olá, ${jogador.nome}!</h3>
    <p><strong>Gênero:</strong> ${formataGenero(jogador.genero)}</p>
    <p><strong>Motivação:</strong> ${formataMotivacao(jogador.motivacao)}</p>
    <p><strong>Passado:</strong> ${formataPassado(jogador.passado)}</p>
    <p>Prepare-se para enfrentar os torneios e construir sua saga!</p>
  `;

  // Futuramente aqui poderá iniciar o fluxo dos torneios, diálogos e batalhas
}

// Funções para tradução de códigos para texto amigável
function formataGenero(cod) {
  const map = {
    masculino: "Masculino",
    feminino: "Feminino",
    "nao-binario": "Não-Binário",
    "prefiro-nao-dizer": "Prefiro não dizer",
  };
  return map[cod] || cod;
}
function formataMotivacao(cod) {
  const map = {
    reconhecimento_vila: "Buscar reconhecimento na vila natal",
    provar: "Provar ser mais do que aparenta",
    peca_perdida: "Encontrar uma peça perdida do passado",
    tornar_lenda: "Tornar-se uma lenda do torneio",
    inspirar: "Inspirar amigos e familiares",
    defender_causa: "Defender uma causa importante",
  };
  return map[cod] || cod;
}
function formataPassado(cod) {
  const map = {
    sobrevivente_torneio:
      "Sobrevivente de um torneio antigo com memórias fragmentadas",
    ex_aliado_lider: "Ex-aliado de um dos atuais líderes de torneio",
    filho_legendario: "Filho(a) de um lendário campeão desconhecido",
    crianca_sonhadora: "Criança sonhadora que sempre assistiu às batalhas pela cerca",
    artesao_convertido:
      "Artesão de blocos convertido em duelista por acaso",
  };
  return map[cod] || cod;
}

// Carrega dados do jogador se já existir e inicia o jogo direto
function carregarSalvo() {
  const salvo = localStorage.getItem("blockSoldiersJogador");
  if (salvo) {
    jogador = JSON.parse(salvo);
    iniciarJogo();
  }
}

// Ao carregar a página, checa se jogador já tem personagem criado
window.addEventListener("load", () => {
  carregarSalvo();
});
```

