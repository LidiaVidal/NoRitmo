function pegaRadio() {
    let refeicaoRegistrada = 0
    let valorRadio = ''
    let pontosRefeicao = 0
    const refeicoes = document.querySelectorAll('.section_meals')
    refeicoes.forEach(section => {

        const radios = section.querySelectorAll('.meal-status-option')

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

    if (refeicaoRegistrada > 0) {
        let score = Math.round(pontosRefeicao / refeicaoRegistrada)
        mostrarScore(score)
    }
    
}

function escutaCliques() {
    const radios = document.querySelectorAll('.meal-status-option')
    radios.forEach(radio => {
        radio.addEventListener('change', pegaRadio)
    })   
}

function mostrarScore(pontos) {
    const scoreResultado = document.querySelector('.score-number')
    scoreResultado.textContent = `${pontos}%`

    const scoreStatus = document.querySelector('.score-status')
    const scoreTexto = document.querySelector('.text-score')
    const secaoScore = document.querySelector('.section_hero-score')

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

escutaCliques()