# 🍏 NoRitmo - Placar de Consistência Alimentar

> 🚧 **Aviso:** Este projeto está atualmente em construção. A interface e as funcionalidades estão em desenvolvimento e podem passar por atualizações.

**Visualizador Anti-Culpa & Rastreador de Consistência Baseado na Regra 80/20**

🌐 **Acesse o site em construção (GitHub Pages):** [https://lidiavidal.github.io/NoRitmo/](https://lidiavidal.github.io/NoRitmo/)

Bem-vindo ao **NoRitmo**! Este projeto nasceu para combater a armadilha do pensamento "tudo ou nada" nas dietas. Quando alguém inicia uma mudança alimentar e escorrega em apenas uma refeição (ex: comeu pizza no jantar), a mente gera a falsa sensação de que "o dia inteiro foi arruinado", o que muitas vezes leva ao abandono do plano no dia seguinte.

O **NoRitmo** não é um contador de calorias cansativo onde você precisa pesar seus alimentos. Ele funciona como um **placar esportivo de hábitos**. O objetivo é registrar o ritmo do dia com apenas 1 clique por refeição e provar visualmente que 3 acertos e 1 erro continuam sendo 75% de sucesso diário!

## 🚀 Funcionalidades

*   **Blocos de Refeição Diário:** O dia é dividido em 4 blocos (Café da Manhã, Almoço, Lanche, Jantar). Cada bloco possui 3 botões de status rápido: No Foco (100 pts), Equilibrado (70 pts) e Livre (0 pts).
*   **Barra Anti-Culpa em Tempo Real:** Calcula a média percentual das refeições marcadas até o momento no dia. A cor da barra varia dinamicamente (Verde para consistência excelente, Âmbar para equilibrado, Azul para recalibrar).
*   **Feedback Psicológico:** Exibe frases motivacionais para aliviar o peso da culpa, geradas com base na sua porcentagem atual (ex: "Você manteve o foco em 3 de 4 refeições hoje. Isso é 75% de vitória!").
*   **Mosaico Semanal:** Histórico em formato de matriz dos últimos 7 dias. Ele gera uma visão macro provando que, mesmo com alguns blocos vermelhos (livres) isolados, o padrão verde (foco) predomina na sua semana.
*   **Interface Ultrarrápida:** Preenchimento completo do dia em menos de 5 segundos.

*Nota: O NoRitmo NÃO faz julgamento moral, NÃO é uma balança de gramas e NÃO exige login, senha ou conexão com a internet.*

## 🛠️ Stack Tecnológica

*   **HTML5 & CSS3**
*   **JavaScript (Puro / Vanilla)**
*   **Persistência de Dados:** `localStorage` (Sem necessidade de backend, os dados ficam salvos no seu próprio navegador)

## 🏗️ Arquitetura e Decisões de Engenharia (Para Desenvolvedores)

Este projeto foi desenvolvido utilizando as seguintes premissas técnicas e de produto:

1.  **Arquitetura Orientada a Estado:** O DOM não é manipulado de forma desorganizada. Existe um objeto de estado central (estruturado em JSON) e funções de renderização pura que refletem o estado na tela.
2.  **UX Baseada em Psicologia Comportamental:** Ferramentas de nutrição muitas vezes falham pelo atrito de uso e pelo viés do tudo-ou-nada. Esta solução minimalista foca na taxa de 80/20 e em métricas animadoras de reforço positivo.
3.  **Clean Code em Vanilla JS:** Implementação de um armazenamento robusto utilizando `localStorage` com serialização JSON, delegação de eventos (Event Delegation) e manipulação eficiente do DOM sem a necessidade de frameworks externos pesados.

## 🏁 Como Executar o Projeto

Como o projeto é feito puramente em frontend (Vanilla), não há necessidade de processos de build complexos ou instalações via terminal.

1. Faça o clone do repositório:
   ```bash
   git clone https://github.com/lidiavidal/NoRitmo.git
   ```
2. Navegue até a pasta do projeto.
3. Abra o arquivo `index.html` em qualquer navegador web moderno.
4. Comece a registrar suas refeições e acompanhe seu progresso!

---
*Projeto desenvolvido para o Portfólio com foco em Saúde e Psicologia Comportamental.*
