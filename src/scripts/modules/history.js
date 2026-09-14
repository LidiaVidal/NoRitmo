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

export function renderizarHistorico(historicoArray) {

    const containerPrincipal = document.querySelector('.container-do-historico'); 
    
    if (!containerPrincipal) return;

    containerPrincipal.innerHTML = ''; 

    containerPrincipal.innerHTML = '<h1 class="title-pagina">Seu histórico</h1>';

    if (!historicoArray || historicoArray.length === 0) {
        containerPrincipal.innerHTML += '<p style="text-align: center; margin-top: 2rem;">Nenhum histórico registrado ainda.</p>';
        return;
    }

    historicoArray.forEach(dado => {
        const historicoDiaSecao = document.createElement('section');
        historicoDiaSecao.classList.add('historico-dia');
        historicoDiaSecao.setAttribute('data-status', 'balanced'); 

        let conteudoRefeicoesHTML = '';
        const ordemRefeicoes = ['breakfast', 'lunch', 'snack', 'dinner'];
        
        ordemRefeicoes.forEach(chave => {
            const statusDaRefeicao = dado.refeicoes ? dado.refeicoes[chave] : '';
            const anotacaoDaRefeicao = dado.anotacoes ? dado.anotacoes[chave] : '';

            if (statusDaRefeicao) {
                conteudoRefeicoesHTML += `
                    <p class="historico-refeicao">${dicionarioRefeicoes[chave]}: 
                        <span class="status-refeicao" data-status="${statusDaRefeicao}">
                            ${dicionarioStatus[statusDaRefeicao]}
                        </span>
                    </p>
                `;
            }

            if (anotacaoDaRefeicao) {
                conteudoRefeicoesHTML += `
                    <p class="historico-anotacoes">${anotacaoDaRefeicao}</p>
                `;
            }
        });

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

        
        const header = historicoDiaSecao.querySelector('.header-historico-section');
        const conteudo = historicoDiaSecao.querySelector('.historico-content');
        header.addEventListener('click', () => {
            conteudo.classList.toggle('escondido');
        });

        containerPrincipal.appendChild(historicoDiaSecao);
    });
}