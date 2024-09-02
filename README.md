## Drag-and-Drop Project

Este projeto implementa uma funcionalidade básica de arrastar e soltar usando HTML, CSS e JavaScript. Os usuários podem arrastar itens para áreas específicas, mas os itens retornarão automaticamente para uma área neutra quando soltos.

## Imagem do Projeto

<img src="/assets/img-projet.png" alt="imagem_readme">

## Recursos

 - Arrastar e soltar: os usuários podem arrastar itens da área neutra sobre zonas de soltar predefinidas.
 - Redefinição automática: os itens retornarão para a área neutra após serem soltos em uma zona de soltar.
 - Feedback visual: os itens e áreas fornecem dicas visuais (por exemplo, efeitos de foco) durante o processo de arrastar e soltar.
 - Validação: o projeto inclui lógica para verificar o posicionamento correto dos itens nas zonas de soltar.
 

## Estrutura do projeto

**HTML:** fornece a estrutura para a interface de arrastar e soltar.
**CSS:** contém estilos para feedback visual durante arrastar, passar o mouse e posicionamento correto dos itens.
**JavaScript:** lida com a lógica de arrastar e soltar, incluindo ouvintes de eventos e manipulação de DOM.

## Como funciona

**Áreas:** Existem três zonas de soltar (a, b, c) e uma área neutra onde os itens começam.

**Eventos de arrastar e soltar:**

 - Os itens são arrastáveis, e os ouvintes manipulam os eventos dragstart, dragend, dragover, dragleave e drop.
- Quando um item é arrastado e solto em qualquer zona de soltar, ele retornará automaticamente para a área neutra.

**Validação:** O sistema verifica se os itens estão corretamente posicionados (na área neutra após serem soltos) e fornece feedback visual de acordo.

**Como executar o projeto**

Clone o repositório:
bash

Copiar código
git clone https://github.com/yourusername/drag-and-drop-project.git

Abra o projeto: Navegue até o diretório do projeto e abra o arquivo index.html no seu navegador.

## **Licença**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contribuindo

Se você quiser contribuir para este projeto, bifurque o repositório, crie uma nova ramificação e envie uma solicitação de pull. Quaisquer sugestões ou melhorias são bem-vindas!