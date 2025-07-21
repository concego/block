```javascript
// data/torneios.js

const torneios = [
  // Torneio Aquático
  {
    id: "aquatico",
    nome: "Torneio Aquático",
    arena: "Arena Submersa",
    descricao: "Torneio realizado próximo às águas da vila costeira. O clima pode alternar entre chuva, brisa úmida e fortes correntezas.",
    tipo: "menor",
    lider: "marina",
    participantes: ["marina", "pesqueiro", "tsunami", "estrela", "salitre", "jogador"],
    regras: [
      "Aumenta o poder dos blocos de Água.",
      "Blocos de Fogo recebem penalidade neste ambiente.",
      "Pode haver eventos de inundação afetando a arena."
    ]
  },
  // Torneio Vulcânico
  {
    id: "vulcanico",
    nome: "Torneio Vulcânico",
    arena: "Cratera de Vulcão",
    descricao: "Palco escaldante entre rios de magma e brasas. Exige estratégia contra ataques de calor e explosões ocasionais.",
    tipo: "menor",
    lider: "igor_flambar",
    participantes: ["igor_flambar", "rita_cinzeiro", "carbon", "polux", "jogador"],
    regras: [
      "Blocos de Fogo e Metal ganham bônus.",
      "Eventos de explosões podem causar dano ambiental.",
      "Blocos de Planta e Gelo têm desempenho reduzido."
    ]
  },
  // Torneio Florestal
  {
    id: "florestal",
    nome: "Torneio Florestal",
    arena: "Bosque dos Blocos",
    descricao: "Vegetação densa, plataformas elevadas e neblina misteriosa. Ideal para jogadas furtivas e estratégias baseadas em veneno.",
    tipo: "menor",
    lider: "caio_raiz",
    participantes: ["caio_raiz", "ivy_peconha", "tronco", "cipo", "jogador"],
    regras: [
      "Bônus para blocos de Planta e Veneno.",
      "Neblina pode ocultar oponentes temporariamente.",
      "Arena interativa: raízes ou galhos modificam o campo."
    ]
  },
  // Torneio dos Ventos
  {
    id: "ventos",
    nome: "Torneio dos Ventos",
    arena: "Topo do Mirante",
    descricao: "Desafios em altura, rajadas imprevisíveis e plataformas instáveis que mudam a cada batalha.",
    tipo: "menor",
    lider: "vitor_aero",
    participantes: ["vitor_aero", "cira_brisa", "jogador"],
    regras: [
      "Bônus para blocos de Vento e Energia.",
      "Efeitos aleatórios de vento alteram iniciativa.",
      "Plataformas podem se mover durante a luta."
    ]
  },
  // Torneio Metálico
  {
    id: "metalico",
    nome: "Torneio Metálico",
    arena: "Oficina de Blocos",
    descricao: "Ambiente industrial, trilhos magnéticos e obstáculos mecânicos que exigem adaptação.",
    tipo: "menor",
    lider: "robson_steel",
    participantes: ["robson_steel", "clara_forja", "jogador"],
    regras: [
      "Bônus para blocos de Metal.",
      "Eventos magnéticos podem prender ou mover os personagens.",
      "Armadilhas ocasionais na arena."
    ]
  },
  // Torneio Final
  {
    id: "final",
    nome: "Torneio Principal",
    arena: "Grande Coliseu",
    descricao: "O maior e mais aguardado torneio. Arena de múltiplas fases e público de todas as vilas. Aqui campeões se consagram.",
    tipo: "principal",
    lider: "broken_soldier",
    participantes: [
      "marina", // Aquático
      "igor_flambar", // Vulcânico
      "caio_raiz", // Florestal
      "vitor_aero", // Ventos
      "robson_steel", // Metálico
      "elyra_shade", // Rival misterioso
      "sombra_dourada", // Rival de luz
      "broken_soldier", // Boss final
      "jogador"
    ],
    regras: [
      "Cada fase pode ter regras surpresas.",
      "Boss muda de estilo a cada fase.",
      "Bônus de elementos variáveis conforme a rodada."
    ]
  }
];

// Exporta para acesso em main.js ou lógicas de torneios
export { torneios };
```