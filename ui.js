```javascript
// ui.js

// Exibir uma notificação temporária no topo da tela
function mostrarNotificacao(mensagem, duracao = 3000) {
  let notificacao = document.createElement('div');
  notificacao.className = 'notificacao';
  notificacao.textContent = mensagem;
  document.body.appendChild(notificacao);

  // Mostrar animação (CSS deve definir estilo e animação para .notificacao)
  setTimeout(() => {
    notificacao.classList.add('fade-out');
  }, duracao - 1000);

  setTimeout(() => {
    notificacao.remove();
  }, duracao);
}

// Criar um menu dinâmico de seleção simples
function criarMenuSelecao(titulo, opcoes = [], onSelecionar) {
  const menu = document.createElement('div');
  menu.className = 'menu-selecao';

  const cabecalho = document.createElement('h3');
  cabecalho.textContent = titulo;
  menu.appendChild(cabecalho);

  const lista = document.createElement('ul');
  lista.className = 'lista-opcoes';

  opcoes.forEach(opcao => {
    const item = document.createElement('li');
    item.tabIndex = 0;  // Para foco em teclado
    item.textContent = opcao.label;
    item.dataset.value = opcao.value;

    item.addEventListener('click', () => onSelecionar(opcao.value));
    item.addEventListener('keypress', (e) => {
      if(e.key === 'Enter' || e.key === ' ') onSelecionar(opcao.value);
    });

    lista.appendChild(item);
  });

  menu.appendChild(lista);

  // Um método para fechar/remover o menu depois do uso
  menu.fechar = () => menu.remove();

  document.body.appendChild(menu);
  return menu;
}

// Atualiza texto e visibilidade de um componente (ex: painel de status)
function atualizarComponente(id, conteudo, visivel = true) {
  const elem = document.getElementById(id);
  if (!elem) return;

  elem.innerHTML = conteudo;
  elem.style.display = visivel ? 'block' : 'none';
}

export {
  mostrarNotificacao,
  criarMenuSelecao,
  atualizarComponente
};
```
