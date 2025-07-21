```javascript
// narrador.js

let synth = window.speechSynthesis;
let vozesDisponiveis = [];
let vozNarrador = null; // A voz selecionada para o narrador
let legendasAtivas = true; // Controle para ativar/desativar legendas

// Elemento onde as legendas serão exibidas
const elementoLegendas = document.createElement('div');
elementoLegendas.id = 'narrador-legendas';
document.body.appendChild(elementoLegendas);

// Função para popular a lista de vozes disponíveis
function popularVozes() {
    vozesDisponiveis = synth.getVoices();
    // Tenta encontrar uma voz em português do Brasil como padrão
    vozNarrador = vozesDisponiveis.find(voice => voice.lang === 'pt-BR') || vozesDisponiveis.find(voice => voice.lang.startsWith('pt')) || vozesDisponiveis[0];
    
    // Dispara evento ou log para indicar que as vozes foram carregadas
    console.log("Vozes do TTS carregadas. Voz padrão:", vozNarrador ? vozNarrador.name : "Nenhuma voz disponível.");
}

// Quando as vozes são carregadas (pode demorar um pouco)
if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = popularVozes;
}

// Função principal para o narrador falar
function narrar(texto, options = {}) {
    if (!texto) return;

    // Cancela qualquer fala atual para evitar sobreposição
    if (synth.speaking) {
        synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(texto);

    // Usa a voz selecionada ou a primeira disponível
    utterance.voice = options.voice || vozNarrador;
    utterance.rate = options.rate || 1;    // Velocidade da fala (0.1 a 10, padrão 1)
    utterance.pitch = options.pitch || 1;  // Tonalidade (0 a 2, padrão 1)
    utterance.volume = options.volume || 1; // Volume (0 a 1, padrão 1)

    // Exibe as legendas
    if (legendasAtivas) {
        elementoLegendas.textContent = texto;
        elementoLegendas.style.opacity = 1;
        elementoLegendas.style.pointerEvents = 'auto'; // Garante que é visível
    }

    // Oculta as legendas após a fala terminar
    utterance.onend = () => {
        if (legendasAtivas) {
            elementoLegendas.style.opacity = 0;
            elementoLegendas.style.pointerEvents = 'none'; // Impede interação quando invisível
        }
    };

    // Erro na fala
    utterance.onerror = (event) => {
        console.error('Erro no TTS:', event.error);
        // Oculta legendas mesmo com erro
        if (legendasAtivas) {
            elementoLegendas.style.opacity = 0;
            elementoLegendas.style.pointerEvents = 'none';
        }
    };

    synth.speak(utterance);
}

// Função para parar a fala atual
function pararNarracao() {
    synth.cancel();
    if (legendasAtivas) {
        elementoLegendas.style.opacity = 0;
        elementoLegendas.style.pointerEvents = 'none';
    }
}

// Função para configurar a voz do narrador (se houver opções customizadas)
function configurarVozNarrador(nomeDaVoz) {
    const vozEncontrada = vozesDisponiveis.find(voice => voice.name === nomeDaVoz);
    if (vozEncontrada) {
        vozNarrador = vozEncontrada;
        console.log("Voz do narrador alterada para:", vozNarrador.name);
    } else {
        console.warn("Voz não encontrada:", nomeDaVoz);
    }
}

// Função para ativar/desativar legendas
function ativarLegendas(ativar) {
    legendasAtivas = ativar;
    if (!ativar) {
        elementoLegendas.style.opacity = 0;
        elementoLegendas.style.pointerEvents = 'none';
    }
}

// CSS básico para as legendas (pode ser movido para style.css)
// Este CSS deve estar no seu style.css para um melhor gerenciamento
/*
#narrador-legendas {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 1.2rem;
    text-align: center;
    max-width: 80%;
    transition: opacity 0.5s ease-out;
    opacity: 0;
    pointer-events: none; // Permite cliques através dele quando invisível
    z-index: 1000;
}
*/

// Exportar funções para uso em outros módulos
export { narrar, pararNarracao, configurarVozNarrador, ativarLegendas, popularVozes };

// Garante que as vozes sejam carregadas ao iniciar
// Em alguns navegadores, popularVozes() precisa ser chamado após um evento de usuário
// ou em 'onvoiceschanged' para que synth.getVoices() retorne todas as vozes.
// Para garantir que esteja pronto para uso, uma chamada inicial:
if (vozesDisponiveis.length === 0) {
    popularVozes();
}
```
