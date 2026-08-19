# Entrega do site Kuarasy para WordPress + Elementor

Este pacote contém as seis páginas do site em HTML separado, um header global, um footer global e os arquivos compartilhados de CSS, JavaScript e fontes.

## Estrutura do pacote

- `paginas/inicio.html`
- `paginas/servicos.html`
- `paginas/acomodacoes.html`
- `paginas/mhares.html`
- `paginas/eventos.html`
- `paginas/contato.html`
- `componentes/header.html`
- `componentes/footer.html`
- `componentes/carregamento-global.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/js/vendor/gsap.min.js`
- `assets/js/vendor/ScrollTrigger.min.js`
- `assets/fonts/`
- `MAPA-DE-MIDIAS.md`

## 1. Crie as páginas no WordPress

Crie estas páginas e use exatamente estes slugs:

| Página | Slug |
|---|---|
| Início | `/` |
| Serviços | `/servicos/` |
| Acomodações | `/acomodacoes/` |
| Mhares | `/mhares/` |
| Eventos | `/eventos/` |
| Contato | `/contato/` |

Em cada página:

1. Selecione o modelo **Elementor Largura Total**. Não use o modelo Canvas, pois ele pode esconder o header e o footer globais.
2. Oculte o título padrão da página.
3. Adicione um widget **HTML**.
4. Copie o conteúdo do arquivo correspondente da pasta `paginas` e cole no widget.

## 2. Instale o header e o footer

Com Elementor Pro:

1. Vá em **Modelos > Construtor de Tema**.
2. Crie um Header e cole `componentes/header.html` em um widget HTML.
3. Defina a condição como **Site inteiro**.
4. Repita o processo com `componentes/footer.html`.

Sem Elementor Pro, use um plugin de header/footer para Elementor e cole os mesmos blocos.

## 3. Coloque CSS e JavaScript na hospedagem

CSS e JavaScript são compartilhados. Eles devem ser carregados uma única vez e serão usados por todas as páginas.

Recomendação: envie a pasta `assets` pelo Gerenciador de Arquivos da hospedagem ou por FTP para:

`/wp-content/uploads/kuarasy-assets/`

Depois, abra `componentes/carregamento-global.html`, substitua `SEU-DOMINIO.com` pelo domínio real e adicione os códigos no Elementor > Código personalizado, ou no recurso equivalente do tema.

Importante: a Biblioteca de Mídia normalmente não aceita arquivos `.css` e `.js`. Para esses arquivos, prefira o Gerenciador de Arquivos, FTP ou um tema-filho.

## 4. Substitua imagens e vídeos

1. Envie as imagens e vídeos para **Mídia > Adicionar nova**.
2. Abra cada mídia e copie sua URL completa.
3. Nos arquivos HTML, procure por `WORDPRESS:`.
4. Troque somente o valor do `src` indicado pelo comentário.

Exemplo:

```html
<!-- WORDPRESS: substitua o caminho abaixo pela URL da Biblioteca de Mídia para: vídeo de fundo da 1ª seção da página Início. -->
<source src="/assets/media/hero-inicio.webm" type="video/webm">
```

Depois da substituição:

```html
<source src="https://seudominio.com/wp-content/uploads/2026/08/video-inicio.webm" type="video/webm">
```

O arquivo `MAPA-DE-MIDIAS.md` mostra todas as mídias organizadas por página.

## 5. Configure as fontes

As fontes estão na pasta `assets/fonts`. Se a pasta `assets` for enviada inteira para `/wp-content/uploads/kuarasy-assets/`, altere no `styles.css` os quatro caminhos marcados por `WORDPRESS — FONTE` para URLs como:

```css
src: url("https://seudominio.com/wp-content/uploads/kuarasy-assets/fonts/Quattrocento-Regular.ttf") format("truetype");
```

O WordPress pode bloquear o upload de `.ttf` pela Biblioteca de Mídia. Nesse caso, envie as fontes pelo Gerenciador de Arquivos junto com o CSS e o JavaScript.

## 6. Verificação final

- Limpe o cache do WordPress, do Elementor e do navegador.
- No Elementor, use **Ferramentas > Regenerar CSS e dados**.
- Confira os links do menu.
- Teste o menu mobile.
- Confirme que todos os vídeos possuem `autoplay muted loop playsinline`.
- Teste o formulário e os botões do WhatsApp.

## Regra importante

A copy aprovada foi preservada. Os comentários `WORDPRESS:` servem apenas para orientar a troca das URLs das mídias e fontes.
