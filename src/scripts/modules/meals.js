//Cores e botao de anotação
const refeicoes = document.querySelectorAll('.section_meals')

refeicoes.forEach(section => {
    const radios = section.querySelectorAll('.meal-status-option')

    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            section.dataset.status = e.target.value
        })
    })
})