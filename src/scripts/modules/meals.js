//Cores e botao de anotação
const optionFoco = document.querySelector('#status-focus-breakfast')

optionFoco.addEventListener('click', mudarCorFoco)

function mudarCorFoco() {
    const barra = document.querySelector('.mini-bar-progress')
    barra.style.setProperty('--brand-foco', '--surface-card')
}