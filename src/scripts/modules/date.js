

export function dataFormatada() {
    const dataAtual = new Date()
    const dia = dataAtual.getDate()
    const mes = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(dataAtual);

    return `${dia} de ${mes}`
}


export function mostrarData(elemento = 'date') {
    const data = document.getElementById(elemento)
    if(data) {
        data.textContent = dataFormatada()
    }
}

