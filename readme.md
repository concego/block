```markdown
# Block Soldiers

Um jogo de aventura e combate estratégico em um mundo de blocos, desenvolvido totalmente em front-end para ser hospedado no GitHub Pages!

## Visão Geral

Block Soldiers é uma experiência single-player onde você constrói seu campeão, personaliza suas habilidades e equipamentos e enfrenta diversos torneios para se tornar uma lenda. O jogo foca em narrativa imersiva, sistema de combate estratégico baseado em elementos, e progressão de personagem, tudo isso sem a necessidade de um backend!

## Funcionalidades Principais

*   **Criação de Personagem:** Personalize seu avatar, gênero, nome, motivação e passado.
*   **Narrativa Rica:** Diálogos e eventos dinâmicos que se adaptam às suas escolhas.
*   **Combate Estratégico:** Sistema de batalha baseado em elementos (Fogo, Água, Metal, Vento, Planta, Energia) e blocos com habilidades únicas.
*   **Sistema de Itens e Equipamentos:** Construa e use itens consumíveis e equipamentos para fortalecer seu soldadinho.
*   **Progressão e Habilidades:** Desbloqueie talentos na árvore de habilidades para adaptar seu estilo de jogo.
*   **Trilha Sonora e Efeitos Procedurais:** Áudio dinâmico e envolvente gerado em tempo real com [Tone.js](https://tonejs.github.io/).
*   **Acessibilidade:** Narrador (TTS) com legendas para uma experiência inclusiva.
*   **Sem Backend:** Todo o jogo funciona no navegador, utilizando LocalStorage para salvar seu progresso.

## Como Jogar

1.  **Acesse a Página do Jogo:** Em breve, o jogo estará disponível diretamente via GitHub Pages.
2.  **Crie seu Personagem:** Siga as instruções na tela para nomear e dar profundidade ao seu Block Soldier.
3.  **Explore e Batalhe:** Participe de torneios, enfrente adversários desafiadores e descubra segredos.
4.  **Gerencie seu Soldadinho:** Use a oficina para construir e reparar itens, e aprimore suas habilidades.

## Estrutura do Projeto

O projeto está organizado de forma modular para facilitar o desenvolvimento e a compreensão:

```
/
├── index.html              # Página principal e estrutura do jogo
├── style.css               # Estilos visuais e responsividade
├── main.js                 # Lógica principal, navegação entre telas
├── audio.js                # Gerenciamento de áudio com Tone.js
├── narrador.js             # Implementação de Text-to-Speech (TTS) e legendas
├── storage.js              # Funções para salvar/carregar/exportar progresso
├── ui.js                   # Funções de interface de usuário (menus, notificações)
├── arvore_habilidades.js   # Definições da árvore de habilidades
├── /data                   # Pasta para dados do jogo
│   ├── personagens.js      # Dados dos personagens (adversários)
│   ├── torneios.js         # Dados dos torneios e suas regras
│   ├── itens.js            # Definições de itens e receitas
├── /assets                 # Recursos visuais (imagens, ícones)
└── README.md               # Este arquivo de documentação
```

## Setup Local para Desenvolvimento

1.  **Clone o Repositório:**
    `git clone <URL_DO_SEU_REPOSITORIO>`
    `cd block-soldiers`
2.  **Abra o `index.html`:** Simplesmente abra o arquivo `index.html` em seu navegador.
    *   **Nota:** Para que o TTS e outras APIs do navegador funcionem corretamente (e para evitar problemas de CORS se você for carregar assets locais de alguma forma não ideal), é altamente recomendável usar um servidor local. Você pode usar o Live Server no VS Code ou executar um servidor Python simples:
        `python -m http.server` (para Python 3) ou `python -m SimpleHTTPServer` (para Python 2).
        Depois, acesse `http://localhost:8000` no seu navegador.

## Licença

Este projeto é **LIVRE DE CUSTOS**. Você pode reproduzir, modificar e compartilhar o Block Soldiers à vontade.

**É OBRIGATÓRIO atribuir os créditos completos à equipe “Euconcegojogar” em qualquer uso ou redistribuição, especialmente em situações de divulgação pública, distribuição comercial ou uso para obtenção de ganhos pessoais.**

O uso do projeto implica concordância com esta regra de reconhecimento de autoria.

## Contribuição

Contribuições são bem-vindas! Se você tiver ideias, encontrar bugs ou quiser melhorar o código, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Contato

Siga a Equipe Euconcegojogar nas redes sociais para novidades e atualizações:

*   **YouTube:** [YouTube.com/euconcegojogar](https://youtube.com/euconcegojogar)
*   **Facebook:** [facebook.com/euconcegojogar](https://facebook.com/euconcegojogar)
*   **Instagram:** [Instagram.com/euconcegojogar](https://instagram.com/euconcegojogar)
```
