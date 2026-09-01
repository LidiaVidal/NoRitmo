//Cores e botao de anotação

export function configurarInteracoesRefeicoes() {
    const refeicoes = document.querySelectorAll('.section_meals')

    refeicoes.forEach(section => {
        const radios = section.querySelectorAll('.meal-status-option')

        radios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                section.dataset.status = e.target.value
            })
        })
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


