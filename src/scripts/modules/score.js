// Módulo de score: calcula a pontuação diária e atualiza a interface visual
import {historicoRefeicoes} from './storage.js'

// Registra listeners nos radios e inputs de anotação para recalcular score e salvar dados
export function escutaCliques() {
    const radios = document.querySelectorAll('.meal-status-option')
    // A cada mudança de status, recalcula o score e salva no localStorage
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            calcularProgressoDiario()
            historicoRefeicoes()
        })
    })   

    // Ao sair do campo de anotação (blur), salva o texto no localStorage
    const inputsAnotacao = document.querySelectorAll('.notes-meals');
    inputsAnotacao.forEach(input => {
        input.addEventListener('blur', () => {
            historicoRefeicoes();
        });
    });
}


// Percorre todas as refeições, soma pontos e calcula a média do score diário
function calcularProgressoDiario() {
    let refeicaoRegistrada = 0
    let valorRadio = ''
    let pontosRefeicao = 0

    const refeicoes = document.querySelectorAll('.section_meals')
    // Para cada seção de refeição, verifica qual radio está marcado
    refeicoes.forEach(section => {

        const radios = section.querySelectorAll('.meal-status-option')

        // Atribui pontos: focus=100, balanced=70, free=0, skip não conta
        radios.forEach(radio => {
                if(radio.checked) {
                    valorRadio = radio.value
                    if (valorRadio == 'focus') {
                        pontosRefeicao += 100
                        refeicaoRegistrada++
                    } else if (valorRadio == 'balanced') {
                        pontosRefeicao += 70
                        refeicaoRegistrada++
                    } else if(valorRadio == 'free') {
                        pontosRefeicao += 0
                        refeicaoRegistrada++
                    }
                }
        })
        
    })

    // Calcula a média apenas se houver refeições registradas (evita divisão por zero)
    if (refeicaoRegistrada > 0) {
        let score = Math.round(pontosRefeicao / refeicaoRegistrada)
        mostrarScore(score)
    }
    
}


// Exibe o score na tela e atualiza o visual (cor, texto e barra) conforme a faixa
function mostrarScore(pontos) {
    const scoreResultado = document.querySelector('.score-number')
    scoreResultado.textContent = `${pontos}%`

    const scoreStatus = document.querySelector('.score-status')
    const scoreTexto = document.querySelector('.text-score')
    const secaoScore = document.querySelector('.section_hero-score')
    const barraProgresso = document.querySelector('.progresso')
    // Ajusta a largura da barra de progresso conforme o score
    barraProgresso.style.width = `${pontos}%`

    // Faixas: 75-100 = Excelente (verde), 50-74 = Equilíbrio (amarelo), <50 = Recalibrar (cinza)
    if(pontos >= 75 && pontos <= 100) {
        secaoScore.dataset.status = 'focus'
        scoreStatus.textContent = 'Excelente'
        scoreTexto.innerHTML = 'Dia de ouro! <br> Você manteve o foco principal e provou que tem o controle da sua rotina.'

    } else if (pontos >= 50 && pontos < 75) {
        secaoScore.dataset.status = 'balanced'
        scoreStatus.textContent = 'Equilíbrio'
        scoreTexto.innerHTML = 'Dia equilibrado e sustentável. <br> Adaptações inteligentes mantêm o hábito vivo sem neura.'
    } else {
        secaoScore.dataset.status = 'free'
        scoreStatus.textContent = 'Recalibrar'
        scoreTexto.innerHTML ='Um dia atípico não apaga o seu progresso! <br> O que importa é o próximo passo. Recalibre sem culpa!'
    }
}

