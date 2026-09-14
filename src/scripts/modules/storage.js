// Módulo de storage: gerencia a persistência dos dados no localStorage

// Carrega o histórico salvo ou inicializa um array vazio
export let historico = JSON.parse(localStorage.getItem('noRitmo_dados')) || []; 

// Coleta os dados das refeições do DOM e salva no localStorage
export function historicoRefeicoes() {
    const dataAtual = document.getElementById('date');
    const refeicoes = document.querySelectorAll('.section_meals');

    const dataDeHoje = dataAtual.textContent;

    // Procura se já existe um registro para a data de hoje no array
    let posicaoDoDia = historico.findIndex(item => item.data === dataDeHoje);

    // Se não existe, cria um novo objeto com estrutura vazia para o dia
    if (posicaoDoDia === -1) {
        const novoDia = {
            data: dataDeHoje,
            refeicoes: {
                breakfast: '', 
                lunch: '',
                snack: '',
                dinner: ''
            },
            anotacoes: {
                breakfast: '', 
                lunch: '',
                snack: '',
                dinner: ''
            }
        };
        
        historico.push(novoDia);
        
        posicaoDoDia = historico.length - 1; 
    }

    // Garante que os objetos de refeições e anotações existam (evita erros)
    if (!historico[posicaoDoDia].refeicoes) historico[posicaoDoDia].refeicoes = {};
    if (!historico[posicaoDoDia].anotacoes) historico[posicaoDoDia].anotacoes = {};


    // Percorre cada seção de refeição para capturar o status e a anotação
    refeicoes.forEach(section => {
        const nomeRefeicao = section.dataset.refeicao; 
        let valorRadio = ''; 
        
        const radios = section.querySelectorAll('.meal-status-option');
        const inputAnotacao = section.querySelector('.notes-meals')

        // Busca qual radio está marcado nesta refeição
        radios.forEach(radio => {
            if(radio.checked) {
                valorRadio = radio.value;
            }
        });

        // Inicializa anotações se não existirem (proteção extra)
        if (!historico[posicaoDoDia].anotacoes) {
            historico[posicaoDoDia].anotacoes = { breakfast: '', lunch: '', snack: '', dinner: '' };
        }

        // Salva a anotação se o campo tiver conteúdo
        if (inputAnotacao && inputAnotacao.value !== '') {
            historico[posicaoDoDia].anotacoes[nomeRefeicao] = inputAnotacao.value;
        }

        // Salva o status da refeição se um radio foi selecionado
        if (valorRadio !== '') {
            historico[posicaoDoDia].refeicoes[nomeRefeicao] = valorRadio;
        }
    });
    // Persiste todo o array de histórico no localStorage
    localStorage.setItem('noRitmo_dados', JSON.stringify(historico));
}


// Restaura os dados salvos no DOM ao carregar a página (radios e anotações)
export function carregarDadosIniciais() {
    const dataAtualElement = document.getElementById('date').textContent;

    if (!dataAtualElement) return;
    const dataAtual = dataAtualElement.textContent;
    // Procura o registro do dia atual no histórico
    const diaSalvo = historico.find(item => item.data === dataAtual);

    if (diaSalvo) {
        const refeicoes = document.querySelectorAll('.section_meals');
        
        // Para cada refeição, marca o radio salvo e preenche a anotação
        refeicoes.forEach(section => {
            const nomeRefeicao = section.dataset.refeicao;
    
            const valorSalvo = diaSalvo.refeicoes ? diaSalvo.refeicoes[nomeRefeicao] : '';
            const anotacaoSalva = diaSalvo.anotacoes ? diaSalvo.anotacoes[nomeRefeicao] : '';

            // Marca o radio correspondente e dispara o evento change para atualizar o visual
            if (valorSalvo) {
                const radioParaMarcar = section.querySelector(`.meal-status-option[value="${valorSalvo}"]`);
                if (radioParaMarcar) {
                    radioParaMarcar.checked = true;
                    radioParaMarcar.dispatchEvent(new Event('change'));
                }
            }

            // Restaura o texto da anotação e exibe o campo visível
            if (anotacaoSalva) {
                const inputAnotacao = section.querySelector('.notes-meals');
                if (inputAnotacao) {
                    inputAnotacao.value = anotacaoSalva;
                    inputAnotacao.style.display = 'block'; // Mostra o input já aberto
                }
            }
        });

    }
    console.log('Carregou os dados')
}
