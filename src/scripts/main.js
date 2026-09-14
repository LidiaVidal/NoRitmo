// Ponto de entrada da aplicação. Importa os módulos e executa conforme a página atual.
import { mostrarData } from "./modules/date.js";
import { configurarInteracoesRefeicoes } from "./modules/meals.js";
import { escutaCliques } from "./modules/score.js";
import { carregarDadosIniciais,  historico  }  from "./modules/storage.js";
import { renderizarHistorico } from "./modules/history.js";


// Identifica a página pelo id do body para carregar scripts específicos
const paginaAtual = document.body.id;
carregarDadosIniciais();

if (paginaAtual === 'page-home') {
    // Página Home: exibe data, configura interações das refeições e escuta mudanças de score
    mostrarData();
    configurarInteracoesRefeicoes();
    escutaCliques();
    carregarDadosIniciais();


} else if (paginaAtual === 'page-historico') {
    // Página Histórico: renderiza os cards com dados salvos no localStorage
    renderizarHistorico(historico);
}
