```javascript
// data/personagens.js

const personagens = [
  // Torneio Aquático
  {
    id: "marina",
    nome: "Marina",
    elementos: ["Água", "Gelo"],
    motivacao: "Quer provar que a flexibilidade supera a força bruta, buscando reconhecimento de sua vila submersa.",
    personalidade: "Tranquila, estratégica e solidária, mas não hesita em congelar quem subestima seu talento.",
    torneio: "Aquático"
  },
  {
    id: "pesqueiro",
    nome: "Pesqueiro",
    elementos: ["Água", "Planta"],
    motivacao: "Deseja financiar melhorias no cais da vila e inspirar crianças ribeirinhas, mostrando que humildade e persistência vencem qualquer correnteza.",
    personalidade: "Bem-humorado, ama contar causos, sempre incentiva rivais a não desistirem.",
    torneio: "Aquático"
  },
  {
    id: "tsunami",
    nome: "Tsunami",
    elementos: ["Água", "Metal"],
    motivacao: "Compete para honrar os ancestrais que dominaram as águas turbulentas da região.",
    personalidade: "Determinado e poderoso, luta como as ondas — imprevisível e forte.",
    torneio: "Aquático"
  },
  {
    id: "estrela",
    nome: "Estrela",
    elementos: ["Água", "Luz"],
    motivacao: "Sonha em ser heroína do mar, inspirando jovens com seu brilho e coragem.",
    personalidade: "Esperançosa e carismática, uma líder natural em qualquer desafio.",
    torneio: "Aquático"
  },
  {
    id: "salitre",
    nome: "Salitre",
    elementos: ["Água", "Terra"],
    motivacao: "Defender o território costeiro que é sua casa, mantendo a harmonia entre terra e mar.",
    personalidade: "Calmo e estrategista, conhece cada detalhe do ambiente onde luta.",
    torneio: "Aquático"
  },

  // Torneio Vulcânico
  {
    id: "igor_flambar",
    nome: "Ígor Flambar",
    elementos: ["Fogo", "Metal"],
    motivacao: "Quer superar o recorde de vitórias da família, carregando o peso do sobrenome com orgulho e ansiedade.",
    personalidade: "Competitivo, inflamável, mas respeita adversários ágeis e criativos.",
    torneio: "Vulcânico"
  },
  {
    id: "rita_cinzeiro",
    nome: "Rita Cinzeiro",
    elementos: ["Fogo", "Trevas"],
    motivacao: "Busca vencer para queimar o próprio passado sombrio e recomeçar, vendo cada duelo como uma chance de redenção.",
    personalidade: "Dramática, filosófica sobre superação e renascimento.",
    torneio: "Vulcânico"
  },
  {
    id: "carbon",
    nome: "Carbão",
    elementos: ["Fogo", "Terra"],
    motivacao: "Simboliza a força bruta do vulcão, confiando em resistência ao invés de estratégias delicadas.",
    personalidade: "Rústico e direto, sério e implacável.",
    torneio: "Vulcânico"
  },
  {
    id: "polux",
    nome: "Pólux",
    elementos: ["Fogo", "Luz"],
    motivacao: "Vê o torneio como um campo de provas para sua luz brilhar intensamente.",
    personalidade: "Orgulhoso e energético, fala com confiança e otimismo.",
    torneio: "Vulcânico"
  },

  // Torneio Florestal
  {
    id: "caio_raiz",
    nome: "Caio Raiz",
    elementos: ["Planta", "Terra"],
    motivacao: "Defensor incansável do meio ambiente, participa para chamar atenção à causa ecológica.",
    personalidade: "Paciente e sábio, enfurece diante de desrespeito à natureza.",
    torneio: "Florestal"
  },
  {
    id: "ivy_peconha",
    nome: "Ivy Peçonha",
    elementos: ["Planta", "Veneno"],
    motivacao: "Busca fortalecer seu laboratório de estudos botânicos, acreditando no futuro das plantas venenosas controladas.",
    personalidade: "Curiosa, visionária, adora um duelo mental.",
    torneio: "Florestal"
  },
  {
    id: "tronco",
    nome: "Tronco",
    elementos: ["Planta", "Metal"],
    motivacao: "Quer provar que força e resistência podem andar de mãos dadas.",
    personalidade: "Firme, forte e pouco falante, prefere deixar suas ações falarem.",
    torneio: "Florestal"
  },
  {
    id: "cipo",
    nome: "Cipó",
    elementos: ["Planta", "Vento"],
    motivacao: "Acredita na liberdade e flexibilidade para superar obstáculos naturais.",
    personalidade: "Ágil, brincalhão e imprevisível.",
    torneio: "Florestal"
  },

  // Torneio dos Ventos
  {
    id: "vitor_aero",
    nome: "Vítor Aero",
    elementos: ["Vento", "Energia"],
    motivacao: "Quer ser lembrado como o block soldier mais rápido do continente.",
    personalidade: "Animado, brincalhão e competitivo.",
    torneio: "Ventos"
  },
  {
    id: "cira_brisa",
    nome: "Cira Brisa",
    elementos: ["Vento", "Luz"],
    motivacao: "Busca transmitir leveza e esperança para sua vila após uma tragédia.",
    personalidade: "Otismista, acolhedora e poética.",
    torneio: "Ventos"
  },

  // Torneio Metálico
  {
    id: "robson_steel",
    nome: "Robson Steel",
    elementos: ["Metal", "Lutador"],
    motivacao: "Ex-operário que usa os torneios para mostrar que nenhuma máquina substitui o espírito humano.",
    personalidade: "Corajoso, solidário e com senso de humor.",
    torneio: "Metálico"
  },
  {
    id: "clara_forja",
    nome: "Clara Forja",
    elementos: ["Metal", "Fogo"],
    motivacao: "Aprendiz de ferreira, deseja criar o bloco perfeito e testar seus designs.",
    personalidade: "Inventiva, apaixonada por tecnologia e inovação.",
    torneio: "Metálico"
  }
];

// Exporta para uso em outras partes do jogo
export { personagens };
```
