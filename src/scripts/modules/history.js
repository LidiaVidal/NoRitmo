// Módulo de histórico: renderiza dinamicamente os cards de dias anteriores

// Dicionários para traduzir as chaves internas para nomes legíveis em pt-BR
const dicionarioRefeicoes = {
    breakfast: 'Café da manhã',
    lunch: 'Almoço',
    snack: 'Lanche da tarde',
    dinner: 'Jantar'
};

const dicionarioStatus = {
    focus: 'Foco',
    balanced: 'Equilíbrio',
    free: 'Livre',
    skip: 'Pular/Jejum'
};

// Recebe o array de histórico e cria os cards HTML para cada dia registrado
export function renderizarHistorico(historicoArray) {

    const containerPrincipal = document.querySelector('.container-do-historico'); 
    
    if (!containerPrincipal) return;

    // Limpa o container e reinsere o título da página
    containerPrincipal.innerHTML = ''; 
    containerPrincipal.innerHTML = '<h1 class="title-pagina">Seu histórico</h1>';

    // Exibe mensagem caso não haja dados registrados
    if (!historicoArray || historicoArray.length === 0) {
        containerPrincipal.innerHTML += '<p style="text-align: center; margin-top: 2rem;">Nenhum histórico registrado ainda.</p>';
        return;
    }

    // Itera sobre cada dia salvo e monta o HTML do card
    historicoArray.forEach(dado => {
        const historicoDiaSecao = document.createElement('section');
        historicoDiaSecao.classList.add('historico-dia');
        historicoDiaSecao.setAttribute('data-status', 'balanced'); 

        let conteudoRefeicoesHTML = '';
        // Define a ordem fixa de exibição das refeições
        const ordemRefeicoes = ['breakfast', 'lunch', 'snack', 'dinner'];
        
        // Para cada refeição, gera o HTML com status e anotação (se houver)
        ordemRefeicoes.forEach(chave => {
            const statusDaRefeicao = dado.refeicoes ? dado.refeicoes[chave] : '';
            const anotacaoDaRefeicao = dado.anotacoes ? dado.anotacoes[chave] : '';

            // Adiciona o parágrafo do status traduzido
            if (statusDaRefeicao) {
                conteudoRefeicoesHTML += `
                    <p class="historico-refeicao">${dicionarioRefeicoes[chave]}: 
                        <span class="status-refeicao" data-status="${statusDaRefeicao}">
                            ${dicionarioStatus[statusDaRefeicao]}
                        </span>
                    </p>
                `;
            }

            // Adiciona a anotação em itálico abaixo do status
            if (anotacaoDaRefeicao) {
                conteudoRefeicoesHTML += `
                    <p class="historico-anotacoes">${anotacaoDaRefeicao}</p>
                `;
            }
        });

        // Monta a estrutura completa do card com header (data + score) e conteúdo expandível
        historicoDiaSecao.innerHTML = `
            <header class="header-historico-section">
                <div class="header-left">
                    <span class="dateHistorico">${dado.data}</span> 
                    <img src="../assets/icon/icon-arrow-down.png" alt="Expandir detalhes" class="seta-acordeao">
                </div>
                <div class="header-right">
                    <div class="score-historico">
                        <p class="score-number">--%</p>
                        <span class="score-status">Equilíbrio</span>
                    </div>
                </div>
            </header>
            <div class="historico-content escondido">
                ${conteudoRefeicoesHTML}
            </div>
        `;

        // Adiciona o comportamento de acordeão: clique no header alterna visibilidade
        const header = historicoDiaSecao.querySelector('.header-historico-section');
        const conteudo = historicoDiaSecao.querySelector('.historico-content');
        header.addEventListener('click', () => {
            conteudo.classList.toggle('escondido');
        });

        containerPrincipal.appendChild(historicoDiaSecao);
    });
}