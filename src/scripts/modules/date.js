// Módulo de data: formata e exibe a data atual em português no header

// Retorna a data atual formatada como "dia de mês" (ex: "14 de setembro")
function dataFormatada() {
    const dataAtual = new Date()
    const dia = dataAtual.getDate()
    // Usa Intl para obter o nome do mês por extenso em pt-BR
    const mes = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(dataAtual);

    return `${dia} de ${mes}`
}


// Insere a data formatada no elemento HTML com o id informado (padrão: 'date')
export function mostrarData(elemento = 'date') {
    const data = document.getElementById(elemento)
    if(data) {
        data.textContent = dataFormatada()
    }
}

