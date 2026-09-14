import { mostrarData } from "./modules/date.js";
import { configurarInteracoesRefeicoes } from "./modules/meals.js";
import { escutaCliques } from "./modules/score.js";
import { carregarDadosIniciais,  historico  }  from "./modules/storage.js";
import { renderizarHistorico } from "./modules/history.js";


const paginaAtual = document.body.id;
carregarDadosIniciais();

if (paginaAtual === 'page-home') {
    // Roda apenas os scripts da Home
    mostrarData();
    configurarInteracoesRefeicoes();
    escutaCliques();
    carregarDadosIniciais();


} else if (paginaAtual === 'page-historico') {
    // Roda apenas os scripts do Histórico
    renderizarHistorico(historico);
}
