let historico = JSON.parse(localStorage.getItem('noRitmo_dados')) || []; 

export function historicoRefeicoes() {
    const dataAtual = document.getElementById('date');
    const refeicoes = document.querySelectorAll('.section_meals');

    const dataDeHoje = dataAtual.textContent;

    let posicaoDoDia = historico.findIndex(item => item.data === dataDeHoje);

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

    refeicoes.forEach(section => {
        const nomeRefeicao = section.dataset.refeicao; 
        let valorRadio = ''; 
        
        const radios = section.querySelectorAll('.meal-status-option');
        const inputAnotacao = section.querySelector('.notes-meals')

        radios.forEach(radio => {
            if(radio.checked) {
                valorRadio = radio.value;
            }
        });

        if (!historico[posicaoDoDia].anotacoes) {
            historico[posicaoDoDia].anotacoes = { breakfast: '', lunch: '', snack: '', dinner: '' };
        }

        if (inputAnotacao && inputAnotacao.value !== '') {
            historico[posicaoDoDia].anotacoes[nomeRefeicao] = inputAnotacao.value;
        }

        if (valorRadio !== '') {
            historico[posicaoDoDia].refeicoes[nomeRefeicao] = valorRadio;
        }
    });
    localStorage.setItem('noRitmo_dados', JSON.stringify(historico));
}


export function carregarDadosIniciais() {
    const dataAtual = document.getElementById('date').textContent;
    const diaSalvo = historico.find(item => item.data === dataAtual);

    if (diaSalvo) {
        const refeicoes = document.querySelectorAll('.section_meals');
        
        refeicoes.forEach(section => {
            const nomeRefeicao = section.dataset.refeicao;
            const valorSalvo = diaSalvo.refeicoes[nomeRefeicao];

            const anotacaoSalva = diaSalvo.anotacoes ? diaSalvo.anotacoes[nomeRefeicao] : '';

            if (valorSalvo) {
                const radioParaMarcar = section.querySelector(`.meal-status-option[value="${valorSalvo}"]`);
                if (radioParaMarcar) {
                    radioParaMarcar.checked = true;
                    radioParaMarcar.dispatchEvent(new Event('change'));
                }
            }

            if (anotacaoSalva) {
                const inputAnotacao = section.querySelector('.notes-meals');
                if (inputAnotacao) {
                    inputAnotacao.value = anotacaoSalva;
                    inputAnotacao.style.display = 'block'; // Mostra o input já aberto
                }
            }
        });
    }
}
