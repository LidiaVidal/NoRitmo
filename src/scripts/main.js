import { mostrarData } from "./modules/date.js";
import { configurarInteracoesRefeicoes } from "./modules/meals.js";
import { escutaCliques } from "./modules/score.js";
import { carregarDadosIniciais }  from "./modules/storage.js";

mostrarData()
configurarInteracoesRefeicoes()
escutaCliques()
carregarDadosIniciais()