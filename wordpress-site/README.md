# Kuarasy - versão HTML para WordPress

Esta pasta é a fonte principal do site institucional.

## Estrutura

- `index.html`: página Início.
- `servicos/index.html`: página Serviços.
- `acomodacoes/index.html`: página Acomodações.
- `mhares/index.html`: página Mhares Restaurante.
- `eventos/index.html`: página Eventos.
- `contato/index.html`: página Contato.
- `assets/css/styles.css`: estilos compartilhados.
- `assets/js/main.js`: header, footer, menu, formulário e inicialização das animações.
- `assets/js/vendor/`: GSAP e ScrollTrigger hospedados no próprio projeto.
- `assets/media/`: imagens, vídeos e imagem social.

## Migração para Elementor

Cada página HTML contém apenas o conteúdo específico da rota entre as tags `<main>` e `</main>`.
O header e o footer são inseridos por `main.js` somente para a prévia estática. No WordPress, eles devem ser criados uma vez no Theme Builder e removidos do HTML de cada página.

O CSS deve ser carregado globalmente. O GSAP, o ScrollTrigger e o `main.js` também devem ser carregados uma única vez no site.
