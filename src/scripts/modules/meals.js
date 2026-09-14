// Módulo de refeições: configura interações visuais dos cards (cor e anotações)

export function configurarInteracoesRefeicoes() {
    // Seleciona todas as seções de refeição da página
    const refeicoes = document.querySelectorAll('.section_meals')

    // Para cada seção de refeição, configura os listeners
    refeicoes.forEach(section => {
        const radios = section.querySelectorAll('.meal-status-option')

        // Ao selecionar um radio, atualiza o data-status da seção (altera cor via CSS)
        radios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                section.dataset.status = e.target.value
            })
        })

        // Configura o botão de anotação para mostrar/ocultar o campo de texto
        const btnNotes = section.querySelector('.btn')
        const notes = section.querySelector('.notes-meals')
        btnNotes.addEventListener('click', () => {
            if (notes.style.display == 'block') {
                notes.style.display = 'none'
            } else {
                notes.style.display = 'block'
            }
        })

    })
}


