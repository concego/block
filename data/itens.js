```javascript
// data/itens.js

const itens = [
  // Itens consumíveis
  {
    id: "soro_revigorante",
    nome: "Soro Revigorante",
    tipo: "consumivel",
    descricao: "Cura 30 pontos de HP do soldadinho durante a batalha.",
    efeito: {
      cura: 30
    },
    receita: ["agua", "energia"]
  },
  {
    id: "granada_toxica",
    nome: "Granada Tóxica",
    tipo: "consumivel",
    descricao: "Aplica veneno no adversário por 2 rodadas.",
    efeito: {
      status: "veneno",
      duracao: 2
    },
    receita: ["veneno", "metal"]
  },
  {
    id: "pocao_agil",
    nome: "Poção Ágil",
    tipo: "consumivel",
    descricao: "Concede esquiva garantida por 1 rodada.",
    efeito: {
      buff: "esquiva",
      duracao: 1
    },
    receita: ["vento", "planta"]
  },
  {
    id: "escudo_instantaneo",
    nome: "Escudo Instantâneo",
    tipo: "consumivel",
    descricao: "Garantia de defesa máxima durante um turno.",
    efeito: {
      buff: "defesa_maxima",
      duracao: 1
    },
    receita: ["metal", "gelo"]
  },

  // Equipamentos (desgaste e melhorias)
  {
    id: "espada_ignea",
    nome: "Espada Ígnea",
    tipo: "equipamento",
    descricao: "Aumenta 10 pontos de ataque com elemento fogo.",
    slots: ["arma"],
    atributos: {
      ataque: 10,
      elemento: "fogo"
    },
    durabilidade_max: 10,
    durabilidade_atual: 10,
    receita: ["fogo", "metal"]
  },
  {
    id: "botas_ventania",
    nome: "Botas Ventania",
    tipo: "equipamento",
    descricao: "Aumenta 15% de esquiva.",
    slots: ["pernas"],
    atributos: {
      esquiva_percentual: 15,
      elemento: "vento"
    },
    durabilidade_max: 8,
    durabilidade_atual: 8,
    receita: ["vento"]
  },
  {
    id: "couraca_titanica",
    nome: "Couraça Titânica",
    tipo: "equipamento",
    descricao: "Aumenta 20 pontos de defesa com elemento metal.",
    slots: ["corpo"],
    atributos: {
      defesa: 20,
      elemento: "metal"
    },
    durabilidade_max: 12,
    durabilidade_atual: 12,
    receita: ["metal", "terra"]
  }
];

// Exporta para uso nos sistemas de construção, batalha e inventário
export { itens };
```
