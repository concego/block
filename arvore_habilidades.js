```javascript
// arvore_habilidades.js

// Estrutura da árvore de habilidades, dividida por elementos
const arvoreHabilidades = {
  fogo: [
    { id: 'fogo_ataque1', nome: 'Ataque Flamejante', descricao: 'Aumenta o dano de todos os ataques de fogo em 10%', custo: 1 },
    { id: 'fogo_defesa1', nome: 'Armadura Incandescente', descricao: 'Reduz dano de ataques de gelo em 15%', custo: 1 },
    { id: 'fogo_ataque2', nome: 'Explosão Ígnea', descricao: 'Chance de causar queimadura extra', custo: 2, prereq: ['fogo_ataque1'] },
  ],
  
  agua: [
    { id: 'agua_cura1', nome: 'Fluxo Revigorante', descricao: 'Cura passiva durante batalhas', custo: 1 },
    { id: 'agua_defesa1', nome: 'Escudo Aquático', descricao: 'Aumenta a defesa contra ataques de fogo', custo: 1 },
    { id: 'agua_velocidade1', nome: 'Correnteza Rápida', descricao: 'Dá esquiva adicional durante chuva', custo: 2, prereq: ['agua_defesa1'] },
  ],

  metal: [
    { id: 'metal_forca1', nome: 'Força Metálica', descricao: 'Aumenta ataque físico em 15%', custo: 1 },
    { id: 'metal_resistencia1', nome: 'Resistência de Titânio', descricao: 'Aumenta durabilidade dos equipamentos', custo: 2 },
    { id: 'metal_reparacao1', nome: 'Conserto Rápido', descricao: 'Reduz custo de blocos para reparos', custo: 2, prereq: ['metal_resistencia1'] },
  ],

  vento: [
    { id: 'vento_velocidade1', nome: 'Passos Leves', descricao: 'Aumenta chance de esquiva em 10%', custo: 1 },
    { id: 'vento_ataque1', nome: 'Rajada Cortante', descricao: 'Ataques de vento penetram defesas', custo: 2 },
    { id: 'vento_energia1', nome: 'Fluxo Energético', descricao: 'Recupera energia mais rápido em campo aberto', custo: 2 },
  ],

  planta: [
    { id: 'planta_toxina1', nome: 'Toxina Potente', descricao: 'Aumenta efeito de veneno', custo: 1 },
    { id: 'planta_cura1', nome: 'Raízes Restauradoras', descricao: 'Regeneração aumentada fora da batalha', custo: 1 },
    { id: 'planta_venenosa1', nome: 'Vinha Prendedora', descricao: 'Chance de paralisar o inimigo', custo: 2, prereq: ['planta_toxina1'] },
  ],

  energia: [
    { id: 'energia_impulso1', nome: 'Impulso Energético', descricao: 'Aumenta ataques em 10%', custo: 1 },
    { id: 'energia_controle1', nome: 'Controle Preciso', descricao: 'Reduz gasto de energia para habilidades especiais', custo: 2 },
    { id: 'energia_buraco_negro', nome: 'Buraco Negro', descricao: 'Habilidade especial rara para controle de campo', custo: 5, prereq: ['energia_controle1'] },
  ]
};

// Função exemplo para validar se o jogador pode desbloquear uma habilidade
function podeDesbloquear(habilidadeId, habilidadesAtuais) {
  // habilidadesAtuais é array de ids de habilidades já adquiridas
  const habilidade = Object.values(arvoreHabilidades).flat().find(h => h.id === habilidadeId);
  if (!habilidade) return false;
  if (!habilidade.prereq) return true;
  return habilidade.prereq.every(prerequisito => habilidadesAtuais.includes(prerequisito));
}

export { arvoreHabilidades, podeDesbloquear };
```
