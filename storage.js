```javascript
// storage.js

const STORAGE_KEY = 'blockSoldiersSave';

// Salva a estrutura completa do progresso do jogador no LocalStorage
function salvarProgresso(progresso) {
  try {
    const json = JSON.stringify(progresso);
    localStorage.setItem(STORAGE_KEY, json);
    console.log('Progresso salvo com sucesso.');
  } catch (e) {
    console.error('Erro ao salvar progresso:', e);
  }
}

// Carrega o progresso salvo. Retorna null se não existir ou erro.
function carregarProgresso() {
  try {
    const json = localStorage.getItem(STORAGE_KEY);
    if (!json) return null;
    const progresso = JSON.parse(json);
    return progresso;
  } catch (e) {
    console.error('Erro ao carregar progresso:', e);
    return null;
  }
}

// Exclui o progresso salvo no LocalStorage
function limparProgresso() {
  localStorage.removeItem(STORAGE_KEY);
  console.log('Progresso removido.');
}

// Gera um código JSON stringificado para exportação manual pela UI
function exportarProgresso() {
  const progresso = carregarProgresso();
  if (!progresso) return null;
  return JSON.stringify(progresso, null, 2);
}

// Importa e salva o progresso recebido em JSON (string)
// Retorna true se sucesso, false se erro
function importarProgresso(jsonString) {
  try {
    const progresso = JSON.parse(jsonString);
    // Aqui pode validar estrutura mínima, por simplicidade salvamos direto
    salvarProgresso(progresso);
    return true;
  } catch (e) {
    console.error('Importação de progresso falhou:', e);
    return false;
  }
}

export {
  salvarProgresso,
  carregarProgresso,
  limparProgresso,
  exportarProgresso,
  importarProgresso
};
```
