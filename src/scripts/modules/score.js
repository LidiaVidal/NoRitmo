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
        alert(score)
    }
    
}

function escutaCliques() {
    const radios = document.querySelectorAll('.meal-status-option')
    radios.forEach(radio => {
        radio.addEventListener('change', pegaRadio)
    })   
}

escutaCliques()